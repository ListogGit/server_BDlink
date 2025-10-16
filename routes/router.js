import { Router } from 'express';
import clientRouter from './clientRouter.js';

const router = new Router();

router.use('/clients', clientRouter)

export default router