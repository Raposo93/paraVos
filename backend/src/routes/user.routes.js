const Router = require("express");
const userLoginController = require("../controllers/user-login.controller");
const userProfileController = require("../controllers/user-profile.controller");
const userRegisterController = require("../controllers/user-register.controller");
const userUpdateDataController = require("../controllers/user-update-data.controller");
const userUpdateEmailController = require("../controllers/user-update-email.controller");
const userUpdatePasswordController = require("../controllers/user-update-password.controller");
const userJWTDTO = require("../dto/user-jwt.dto");
const userLoginDTO = require("../dto/user-login.dto");
const userRegisterDTO = require("../dto/user-register.dto");
const userUpdateDataDTO = require("../dto/user-update-data.dto");
const userUpdateEmailDTO = require("../dto/user-update-email.dto");
const userUpdatePasswordDTO = require("../dto/user-update-password.dto");

const userRouter = Router();

userRouter.post("/register", userRegisterDTO, userRegisterController);
userRouter.post("/login", userLoginDTO, userLoginController);
userRouter.get("/profile", userJWTDTO, userProfileController);

userRouter.patch(
  "/update-data",
  userJWTDTO,
  userUpdateDataDTO,
  userUpdateDataController
);

userRouter.patch(
  "/update-email",
  userJWTDTO,
  userUpdateEmailDTO,
  userUpdateEmailController
);

userRouter.patch(
  "/update-password",
  userJWTDTO,
  userUpdatePasswordDTO,
  userUpdatePasswordController
);

module.exports = userRouter;
