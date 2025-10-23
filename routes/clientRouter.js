import { Router } from 'express';
import { getClients } from '../controllers/clientController.js'

const router = Router();
router.get('/getclients', getClients)


export default router
