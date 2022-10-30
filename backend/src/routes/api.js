const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/getProducts", productController.getProduct);
router.post("/products/store", productController.store);
router.patch("/products/:id/update", productController.update);
router.delete("/products/:id/destroy", productController.destroy);


module.exports = router;
