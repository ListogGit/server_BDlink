import sequelize from "../db.js";
import { DataTypes } from "sequelize";
const Client = sequelize.define('clients',{
    client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    }
}
)
const Products = sequelize.define('products',{
        product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
})
const Orders = sequelize.define('orders',{
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    total:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'открыто'
    }

})
const Order_items = sequelize.define('order_items',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    count:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
export default {Client,Products,Orders,Order_items}
Client.hasMany(Orders)
Orders.belongsTo(Client)
Products.hasMany(Order_items)
Order_items.belongsTo(Products)
Orders.hasMany(Order_items)
Order_items.belongsTo(Orders)
