import express from 'express';
import apikey from '../auth/apikey';
import { Permission } from '../database/model/ApiKey';
import permission from '../helpers/permission';
import signup from './access/signup';
const router = express.Router();
/*---------------------------------------------------------*/
router.use(apikey);
/*---------------------------------------------------------*/
router.use(permission(Permission.GENERAL));
/*---------------------------------------------------------*/
router.use('/signup', signup);
export default router;