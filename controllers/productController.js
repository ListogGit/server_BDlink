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
export const updateProduct = async(req, res, next) => {
    try{
        const {id} = req.params;
        const [updated] = await Products.update(req.body, {where : {id}})
        if(!updated){
            return(res.status(404).json({message: "продукт не найден"}))
        }
        const product = await Products.findByPk(id);
        res.json(product);
    }catch(err){
        res.status(500).json({message: "ошибка сервера"})
    }
} 