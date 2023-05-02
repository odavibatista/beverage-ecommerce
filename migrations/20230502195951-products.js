'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        name: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        kind: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        imgUrl: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cathegory:  {
          type: Sequelize.STRING,
          allowNull: false
        },
        inStock:  {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
        type: Sequelize.DATE
        },
        updatedAt: {
        type: Sequelize.DATE
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("products");
  }
};
