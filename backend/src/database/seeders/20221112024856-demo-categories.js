'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Categories', [
     {
      nameCategory: 'Hogar',
      image: 'categoriaHogar',
     },
     { 
     nameCategory: 'Linea Bebe',
     image: 'categoriaBebe',
     },
     { 
     nameCategory: 'Accesorio',
     image: 'categoriaAccesorios',
     }
    ]);
   
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
