const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const NewsletterAssignment = sequelize.define("newsletter-assignments", {
    signerId: DataTypes.INTEGER,
});

module.exports = NewsletterAssignment