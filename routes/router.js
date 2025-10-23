import { Router } from 'express';
import clientRouter from './clientRouter.js';
import productRouter from './productRouter.js'
import orderRouter from './orderRouter.js'
import order_itemRouter from './order_itemRouter.js'

const router = new Router();
router.use('/orderitems', order_itemRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)
router.use('/clients', clientRouter)
export default router