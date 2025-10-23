import models from '../models/models.js'
const { Order_items } = models;

export const getOrderItems = async(req, res) => {
    try{
        const data = await Order_items.findAll();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: "ошибка сервера при получении данных"})
    }
}