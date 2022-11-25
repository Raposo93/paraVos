const express = require("express");
const authGoogleLoginController = require("../controllers/auth-google-login.controller");

const authRouter = express.Router();

authRouter.post("/google/login", authGoogleLoginController);
//const controller = require("../controllers/authController");
//const redirectIfAutenticated = require("../middlewares/redirectIfAutenticated");

//router.get("/login", redirectIfAutenticated, controller.showLogin);
//router.post("/login", controller.login);

//router.post("/logout", controller.logout);

module.exports = authRouter;
