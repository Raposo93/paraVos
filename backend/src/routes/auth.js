const express = require("express");
const { googleLogin } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/google/login", googleLogin);

module.exports = router;
