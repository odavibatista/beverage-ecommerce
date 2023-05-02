const User = require('../models/User')
const Product = require('../models/Product')
const NewsletterAssignment = require('../models/NewsletterAssignment')

NewsletterAssignment.hasOne(User,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
User.belongsTo(NewsletterAssignment, {
    foreignKey: "signerId",
    as: "signer"
})

module.exports = {User, Product, NewsletterAssignment}