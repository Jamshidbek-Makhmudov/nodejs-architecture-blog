import bcrypt from 'bcrypt';
import crypto from 'crypto';
import express from 'express';
import { createTokens } from '../../auth/authUtils';
import { AuthFailureError, BadRequestError } from '../../core/ApiError';
import { SuccessResponse } from '../../core/ApiResponse';
import KeystoreRepo from '../../database/repository/KeystoreRepo';
import UserRepo from '../../database/repository/UserRepo';
import asyncHandler from '../../helpers/asyncHandler';
import validator from '../../helpers/validator';
import { PublicRequest } from '../../types/app-request';
import schema from './schema';
import { getUserData } from './utils';

const router = express.Router();

router.post(
  '/basic',
  validator(schema.credential),
  asyncHandler(async (req: PublicRequest, res) => {

    const user = await UserRepo.findByEmail(req.body.email);
    if (!user) throw new BadRequestError('User not registered');
    if (!user.password) throw new BadRequestError('Credential not set');

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new AuthFailureError('Authentication failure');
  
    const accessTokenKey = crypto.randomBytes(64).toString('hex');
    const refreshTokenKey = crypto.randomBytes(64).toString('hex');

    await KeystoreRepo.create(user, accessTokenKey, refreshTokenKey);
    const tokens = await createTokens(user, accessTokenKey, refreshTokenKey);
    const userData = await getUserData(user);

    new SuccessResponse('Login Success', {
      user: userData,
      tokens: tokens,
    }).send(res);
  }),
);

export default router;
