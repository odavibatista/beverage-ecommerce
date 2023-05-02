const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING
});

module.exports = User