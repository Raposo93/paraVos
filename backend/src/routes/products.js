const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const path = require("path");
const multer = require("multer");
const { body } = require("express-validator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const validations = [
  //los campos no tienen q estar vacios y tienen q tener como minimo una cierta cantidad de caracteres
  body("name")
    .notEmpty()
    .withMessage("Tienes que ponerle un nombre")
    .isLength({ min: 5 })
    .withMessage("Tiene que tener 5 caracteres como minimo"),
  body("image").notEmpty().withMessage("Tienes que ponerle un precio"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que ponerle una descripción")
    .isLength({ min: 5 })
    .withMessage("Tiene que tener 3 caracteres como minimo"),
  body("price").notEmpty().withMessage("Tienes que ponerle un precio"),
];

//Ruta para traer los productos
router.get("/", productController.list);

//Ruta para buscar un producto
router.get("/", productController.search);

//Ruta para mostrar un producto en particular
router.get("/:id", productController.show);

//Ruta para crear un producto
router.post(
  "/store",
  upload.single("image"),
  validations,
  productController.store
);

//Ruta para editar parcialmente un producto
router.put("/:id/update", productController.update);

//Ruta para eliminar un producto
router.delete("/:id/destroy", productController.destroy);

module.exports = router;
