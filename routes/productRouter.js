import { Router } from 'express';
import { getProducts } from '../controllers/productController.js'

const router = Router();
router.get('/getproducts', getProducts)

export default router
