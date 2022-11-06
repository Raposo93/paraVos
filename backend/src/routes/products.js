const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


//Ruta para traer los productos
router.get("/", productController.list);

//Ruta para buscar un producto
router.get("/", productController.search)

//Ruta para mostrar un producto en particular
router.get("/:id", productController.show)

//Ruta para crear un producto
router.post("/store", productController.store);

//Ruta para editar parcialmente un producto
router.patch("/:id/update", productController.update);

//Ruta para eliminar un producto
router.delete("/:id/destroy", productController.destroy);






module.exports = router;
