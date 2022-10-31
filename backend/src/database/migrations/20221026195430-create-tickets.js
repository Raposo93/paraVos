'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      productId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Products",
          },
          key: "id"
        }
      },
      saleId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Sales",
          },
          key: "id"
        }
      },
      price: {
        type: Sequelize.FLOAT(50),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nameCategory: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(100),
        allowNull: false
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
    await queryInterface.dropTable('tickets');
  }
};