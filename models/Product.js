const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define("products", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    kind: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imgUrl: DataTypes.STRING,
    cathegory: DataTypes.STRING,
    inStock: DataTypes.INTEGER
});

module.exports = Product