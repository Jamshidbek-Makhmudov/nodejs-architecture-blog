import express from 'express';
import editor from './editor';
import writer from './writer';

const router = express.Router();
router.use('/writer', writer);
router.use('/editor', editor);

export default router;