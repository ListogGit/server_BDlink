import models from '../models/models.js'
const { Products } = models;

export const getProducts = async(req, res) => {
    try{
        const data = await Products.findAll();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: "ошибка сервера при получении данных"})
    }
}