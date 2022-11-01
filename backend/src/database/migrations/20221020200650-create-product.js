'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(100),
        allowNull:false,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull:false
      },
      stock: {
        type: Sequelize.INTEGER(11),
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model:"Categories",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};