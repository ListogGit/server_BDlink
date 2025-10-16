import 'dotenv/config' 
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import models from './models/models.js';
const app = express();
const PORT = process.env.PORT;
const {Client} = models;
const getclients = await Client.findAll();
app.use (cors())
app.use(express.json())
app.get('/api/getclients', async(reg,res) => {
    try{
        res.status(200).json(getclients)
    }
    catch(error){
        res.status(500).json({message: "ошибка сервера при получении данных"})
    }
})
const start = async () => {
    try {
        app.listen(PORT, () => {console.log(`сервер работает на порту ${PORT}`)});
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(`БД подключена`)
    }
    catch(error){
        console.log("ошибка подключения БД", error)
    }
}
start()