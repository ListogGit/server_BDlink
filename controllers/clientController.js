import models from '../models/models.js'
const { Client } = models;

export const getClients = async(req, res) => {
    try{
        const data = await Client.findAll();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: "ошибка сервера при получении данных"})
    }
}