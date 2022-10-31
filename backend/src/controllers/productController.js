const db = require("../database/models");
const productsApiController = require("./apiController");

const controller = {
    //Lista de productos
    list: (req, res) => {
      db.Products
      .findAll()
      .then((products) => {
        let respuesta = {
          meta: {
            total: products.length,
            status: 200, 
            url: "/products",
          },
          data: products, //listado de productos
        };
        return res.status(200).json(respuesta);
      });
    },
    //consulto un producto en particular
    show: (req, res) => {
      db.Products
      .findByPk(req.params.id)
      .then((product) => {
        let respuesta = {
          meta: {
            status: 200, 
            url: "/products/:id",
          },
          data: product, //Producto requerido
        };
        return res.status(200).json(respuesta);
      });
    },
    //Creo al producto
    store:(req, res) => {
       db.Products
       .create({ ...req.body })
       .then(product => { 
      return res.json({ 
        data: product,
        status: 200,
        created: 'OK!!'
       });
      })
    },
    //Edición del Producto
    update: async (req, res) => {
       db.Products
       .findByPk(req.params.prod)
       .update({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price,
        categoryId:req.body.category
      })
      .then(product => {
        return res.json({
         data:product,
         status: 200,
         Edited: 'OK!!'
        });
      })
    
    },
    //Para buscar un procducto en el buscador
    search: (req,res) => {
      db.Products
      .findAll ({
        where: {
          name: { [Op.like]: '%' + req.query.keyword + '%'}
        }
      })
      .then (products => {
        return res.status(200).json(products);
      })
    },

    //Destrucción del producto
    destroy: async (req, res) => {
      await db.Products.destroy({
        where: {
          id: req.params.prod,
        },
      });
      return res.json({ mensaje: "Se borró el producto" });
    },

} 

module.exports = controller;