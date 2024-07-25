import { ProtectedRequest } from 'app-request';
import express from 'express';
import _ from 'lodash';
import authentication from '../../auth/authentication';
import { BadRequestError } from '../../core/ApiError';
import { SuccessResponse } from '../../core/ApiResponse';
import UserRepo from '../../database/repository/UserRepo';
import asyncHandler from '../../helpers/asyncHandler';
import validator from '../../helpers/validator';
import schema from './schema';

const router = express.Router();

/*-------------------------------------------------------------------------*/
router.use(authentication);
/*-------------------------------------------------------------------------*/

router.get(
  '/my',
  asyncHandler(async (req: ProtectedRequest, res) => {
    const user = await UserRepo.findPrivateProfileById(req.user._id);
    if (!user) throw new BadRequestError('User not registered');

    return new SuccessResponse(
      'success',
      _.pick(user, ['name', 'email', 'profilePicUrl', 'roles']),
    ).send(res);
  }),
);

router.put(
  '/',
  validator(schema.profile),
  asyncHandler(async (req: ProtectedRequest, res) => {
    const user = await UserRepo.findPrivateProfileById(req.user._id);
    if (!user) throw new BadRequestError('User not registered');

    if (req.body.name) user.name = req.body.name;
    if (req.body.profilePicUrl) user.profilePicUrl = req.body.profilePicUrl;

    await UserRepo.updateInfo(user);

    const data = _.pick(user, ['name', 'profilePicUrl']);

    return new SuccessResponse('Profile updated', data).send(res);
  }),
);

export default router;
