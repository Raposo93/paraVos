'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DescuentoProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      productId: {
        type: Sequelize.INTEGER(11),
        onDelete: "CASCADE" ,
        references: {
          tableName: 'Products',
          key: "id"
        }
      },
      descuentoId: {
        type: Sequelize.INTEGER(11),
        onDelete: "CASCADE" ,
        references: {
          tableName: 'Descuentos',
          key: "id"
        }
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fechaFin: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('DescuentoProducts');
  }
};