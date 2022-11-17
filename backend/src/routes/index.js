const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.js");

/*TODO DO*/
router.use("/auth", authRoutes);

module.exports = router;
