const { DataTypes } = require("sequelize")
const todoSequelize = require("../setup/database")

const TodoModel = todoSequelize.define(
    //   id:1, 
    //   userId:1,
    //   task: "buy grocery",
    //   doBefore:new Date("2024-02-16"),
    //   completed:true
    "Todo",{
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        task:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        completed:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        doBefore:{
            type:DataTypes.DATE,
            allowNull:false,
        },
    },
    { tableName:"todos" }
);

module.exports = TodoModel;