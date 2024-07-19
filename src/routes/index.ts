import express from 'express';
import apikey from '../auth/apikey';
import { Permission } from '../database/model/ApiKey';
import permission from '../helpers/permission';
import login from './access/login';
import logout from './access/logout';
import signup from './access/signup';
import token from './access/token';
import blog from './blog';
const router = express.Router();

router.use('/signup', signup);
/*---------------------------------------------------------*/
router.use(apikey);
/*---------------------------------------------------------*/
router.use(permission(Permission.GENERAL));
/*---------------------------------------------------------*/
router.use('/login', login);
router.use('/logout', logout);
router.use('/token', token);
router.use('/blog', blog);
export default router;