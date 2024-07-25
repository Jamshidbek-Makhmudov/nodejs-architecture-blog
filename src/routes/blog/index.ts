import express from 'express';
import editor from './editor';
import writer from './writer';

const router = express.Router();
router.use('/writer', writer);
router.use('/editor', editor);

export default router;
/**todo
 *  1.redis connection
 *  2.get urls 
 * 3.get with id
 * 4.caching  */