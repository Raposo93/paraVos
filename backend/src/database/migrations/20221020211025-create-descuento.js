'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Descuentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      porcentaje: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      descripcion: {
        type: Sequelize.STRING(100),
        allowNull:false
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
    await queryInterface.dropTable('Descuentos');
  }
};