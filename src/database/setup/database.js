const { Sequelize } =  require("sequelize");

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env

const todoSequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host:"localhost",
    dialect:"mysql"
})

module.exports = todoSequelize;