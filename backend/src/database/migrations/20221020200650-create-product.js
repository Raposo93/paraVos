'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING(50)
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
        type: Sequelize.TEXT(200),
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
      descuentoId: {
        type: Sequelize.STRING(100),
        allowNull:true,
        onDelete: "CASCADE" ,
        references: {
          tableName: 'ProductDescuentos',
          key: "id"
        }
      },
      categoryId: {
        type: Sequelize.STRING(100),
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: 'Categories',
          },
          key: "id"
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