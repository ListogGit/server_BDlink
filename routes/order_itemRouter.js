import { Router } from 'express';
import { getOrderItems } from '../controllers/order_itemController.js'

const router = Router();
router.get('/getorderitems', getOrderItems)

export default router
