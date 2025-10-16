import models from '../models/models.js';
import Router from 'express';

const clientRouter = new Router();
const { Client } = models;

clientRouter.get('/list', async(reg,res) => {
    try{
        const getclients = await Client.findAll();
        res.status(200).json(getclients)
    }
    catch(error){
        res.status(500).json({message: "ошибка сервера при получении данных"})
    }
})
export default clientRouter
