const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { body } = require("express-validator");
const multer = require ("multer");

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
    body("nameCategory")
      .notEmpty()
      .withMessage("Tienes que ponerle un nombre"),
    body("image")
      .notEmpty()
      .withMessage("Tienes que subir una imagen")
  ];
  
//Ruta para traer las categorias
router.get("/", categoryController.listCategory);

//Ruta para mostrar una categoria en particular
router.get("/:id", categoryController.showCategory)

//Ruta para crear una categoria
router.post("/store",upload.single("image"), validations, categoryController.storeCategory);

//Ruta para editar una categoria
router.put("/:id/update", categoryController.updateCategory);

//Ruta para eliminar una categoria
router.delete("/:id/destroy", categoryController.destroyCategory);


module.exports = router;