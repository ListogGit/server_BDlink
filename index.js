import 'dotenv/config' 
import express from 'express';
import sequelize from './db.js';
import router from './routes/router.js';
import cors from 'cors'
import errorHandler from './middleware/errorHandler.js'

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use('/api', router)
app.use(errorHandler)
app.use(express.json())

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