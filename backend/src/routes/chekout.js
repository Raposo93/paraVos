const express = require("express");
const router = express.Router();
const controller = require("../controllers/checkoutController");


router.post("/checkout", controller.checkout);



module.exports = router;
