
import { PublicRequest } from 'app-request';
import express from 'express';
import { ForbiddenError } from '../core/ApiError';
import { Header } from '../core/utils';
import ApiKeyRepo from '../database/repository/ApiKeyRepo';
import asyncHandler from '../helpers/asyncHandler';
import validator, { ValidationSource } from '../helpers/validator';
import schema from './schema';

const router = express.Router();

export default router.use(
  validator(schema.apiKey, ValidationSource.HEADER),
  asyncHandler(async (req: PublicRequest, res, next) => {
    const key = req.headers[Header.API_KEY]?.toString();

     if (!key) throw new ForbiddenError();

    const apiKey = await ApiKeyRepo.findByKey(key);
    if (!apiKey) throw new ForbiddenError();
    req.apiKey = apiKey;
    return next();
  }),
);
