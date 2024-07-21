import express from 'express';
import { BadRequestError } from '../../core/ApiError';
import { SuccessResponse } from '../../core/ApiResponse';
import UserRepo from '../../database/repository/UserRepo';
import asyncHandler from '../../helpers/asyncHandler';
import validator from '../../helpers/validator';
import { RoleRequest } from '../../types/app-request';
import schema from './schema';
const router = express.Router();

router.get('/', (req, res) => { 
  console.log("ok");
  
  res.sendStatus(200)
});

router.put('/', validator(schema.profile),
  asyncHandler(async (req: RoleRequest, res) => {
    const user = await UserRepo.findByEmail(req.body.email);
      if (!user) throw new BadRequestError('User not registered');

    if (req.body.roleCode) user.roles = req.body.roleCode;      

      await UserRepo.updateUserDetails(user);
      new SuccessResponse('Blog updated successfully', user).send(res);


  }),
);

export default router;