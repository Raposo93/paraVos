const { where } = require("sequelize");
const db = require("../database/models");


const controller = {
 //Lista de categorias
 listCategory: (req, res) => {
    db.Categories
    .findAll()
    .then((categories) => {
      let respuesta = {
        meta: {
          total: categories.length,
          status: 200, 
          url: "/categorias",
        },
        data: categories, //listado de categorias
      };
      return res.status(200).json(respuesta);
    });
  },
  //consulto un producto en particular
  showCategory: (req, res) => {
    db.Categories
    .findByPk(req.params.id)
    .then((category) => {
      let respuesta = {
        meta: {
          status: 200, 
          url: "/categoria/:id",
        },
        data: category, //Categoria requerido
      };
      return res.status(200).json(respuesta);
    });
  },
  //Creo la categoria
  storeCategory:(req, res) => {
     db.Categories
     .create({ ...req.body })
     .then(category => { 
    return res.json({ 
      data: category,
      status: 200,
      created: 'OK!!'
     });
    })
  },
  //Edición de la categoria
  updateCategory:  (req, res) => {
    db.Categories
    .update({ ...req.body },
    { 
    where:  { 
       id: req.params.id
    }
   })
    .then(category => { 
   return res.json({ 
     data: category,
     status: 200,
     created: 'OK!!'
    });
   })
   
  
  },
  //Destrucción del producto
  destroyCategory: async (req, res) => {
    await db.Categories.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ mensaje: "Se borró la catgoría" });
  },
 }


  module.exports = controller;