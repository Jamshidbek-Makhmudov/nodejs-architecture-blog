import express from 'express';
import writer from './writer';

const router = express.Router();
router.use('/writer', writer);

export default router;