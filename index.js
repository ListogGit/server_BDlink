import 'dotenv/config' 
import express from 'express';
import sequelize from './db.js';
import router from './routes/router.js';
import cors from 'cors'

const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use('/api', router)


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