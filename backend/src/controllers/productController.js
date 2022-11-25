const db = require("../database/models");

const controller = {
  //Lista de productos
  list: (req, res) => {
    db.Products.findAll({
      include: [{ association: "category" }],
    }).then((products) => {
      let respuesta = {
        meta: {
          total: products.length,
          status: 200,
          url: "/productos",
        },
        data: products, //listado de productos
      };
      return res.status(200).json(respuesta);
    });
  },
  //consulto un producto en particular
  show: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include: [{ association: "category" }],
    }).then((product) => {
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
  store: async (req, res) => {
    try {
      const { name, image, description, stock, price } = req.body;
      const resDetail = await Products.create({
        name,
        image,
        description,
        stock,
        price,
      });
      res.send({ data: resDetail });
    } catch (e) {
      httpError(res, e);
    }
  },
  //Edición del Producto
  update: async (req, res) => {
    await db.Products.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((product) => {
      return res.json({
        data: product,
        status: 200,
        Edited: "OK!!",
      });
    });
  },
  //Para buscar un procducto en el buscador
  search: (req, res) => {
    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((products) => {
      return res.status(200).json(products);
    });
  },

  //Destrucción del producto
  destroy: async (req, res) => {
    await db.Products.destroy({
      where: {
        id: req.params.id,
      },
    }).then((product) => {
      return res.json({
        data: product,
        status: 200,
        Edited: "OK!!",
      });
    });
  },
  //Para buscar un procducto en el buscador
  search: (req, res) => {
    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((products) => {
      return res.status(200).json(products);
    });
  },

  //Destrucción del producto
  destroy: async (req, res) => {
    await db.Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ mensaje: "Se borró el producto" });
  },
};

module.exports = controller;
