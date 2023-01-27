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
const userController = require("../controllers/userController")

const userRouter = Router();

userRouter.post("/register", userRegisterDTO, userRegisterController);
userRouter.post("/login", userLoginDTO, userLoginController);
userRouter.get("/profile", userJWTDTO, userProfileController);

//endpoints de usuarios

//traigo a todos los usuarios
userRouter.get("/getUsers", userController.getUsers);

//Mostrar un usuario en particular
userRouter.get("/:id", userController.show);

 //Creo a un usuario
userRouter.post("/store", userController.store);

//Edito a un usuario
userRouter.patch("/:id/update",userController.update);

//Elimino a un usuario
userRouter.delete("/:id/destroy", userController.destroy);


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
