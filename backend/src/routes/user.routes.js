const Router = require("express");
const userLoginController = require("../controllers/user-login.controller");
const userProfileController = require("../controllers/user-profile.controller");
const userRegisterController = require("../controllers/user-register.controller");
const userJWTDTO = require("../dto/user-jwt.dto");
const userLoginDTO = require("../dto/user-login.dto");
const userRegisterDTO = require("../dto/user-register.dto");

const userRouter = Router();

userRouter.post("/register", userRegisterDTO, userRegisterController);
// userRouter.post("/google/login", userLoginDTO);
userRouter.post("/login", userLoginDTO, userLoginController);
userRouter.get("/profile", userJWTDTO, userProfileController);
// userRouter.patch("/update-data", userJWTDTO, userUpdateDataDTO);
// userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO);
// userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO);

module.exports = userRouter;
