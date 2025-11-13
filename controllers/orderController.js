import models from '../models/models.js'
const { Orders } = models;

export const getOrders = async(req, res) => {
    try{
        const data = await Orders.findAll();
        res.status(200).json(data)
    }
    catch(err){
        next(err)
    }
}