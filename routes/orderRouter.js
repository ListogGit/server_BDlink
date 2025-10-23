import { Router } from 'express';
import { getOrders } from '../controllers/orderController.js'

const router = Router();
router.get('/getorders', getOrders)

export default router
