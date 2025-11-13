import models from '../models/models.js'
const { Client } = models;

export const getClients = async(req, res, next) => {
    try{
        const data = await Client.findAll();
        res.status(200).json(data)
    }
    catch(err){
        next(err);
    }
}
export const createClient = async(req, res, next) => {
    try{
        const {name, rating, age} = req.body;
        const newclient = await Client.create({
            name, rating, age
        });
        res.status(201).json ({message:'добавлено'});
    } 
    catch(err){
        next(err);
    }
}
    export const getOneClient = async(req, res, next) => {
        try{
            const {client_id} = req.params;
            const oneclient = await Client.findOne({
                where:{client_id}
            });
            res.status(200).json(oneclient);
        } 
        catch(err){
            next(err);
        }
}
export const deleteClient = async(req, res, next) => {
    try{
        const {client_id} = req.params;
        const deleated = await Client.destroy({
            where:{client_id}
        });
        res.status(200).json({message:'удалено'});
    } 
    catch(err){
        next(err);
    }
}