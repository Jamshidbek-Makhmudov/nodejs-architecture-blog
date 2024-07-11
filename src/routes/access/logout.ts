import { ProtectedRequest } from 'app-request';
import express from 'express';
import authentication from '../../auth/authentication';
import { SuccessMsgResponse } from '../../core/ApiResponse';
import KeystoreRepo from '../../database/repository/KeystoreRepo';
import asyncHandler from '../../helpers/asyncHandler';

const router = express.Router();

/*-------------------------------------------------------------------------*/
router.use(authentication);
/*-------------------------------------------------------------------------*/

router.delete(
  '/',
  asyncHandler(async (req: ProtectedRequest, res) => {
    await KeystoreRepo.remove(req.keystore._id);
    new SuccessMsgResponse('Logout success').send(res);
  }),
);

export default router;
