import { Router } from 'express';
import { getClients, createClient, getOneClient, deleteClient } from '../controllers/clientController.js'

const router = Router();
router.get('/getclients', getClients)
router.get('/', getClients);
router.post('/', createClient);
router.get('/:client_id', getOneClient);
router.delete('/id',deleteClient);


export default router
