const db = require("../database/models");
const { hash } = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const userRegisterController = async (req, res) => {
  const {
    firstname,
    lastname,
    address_mail,
    password,
    google_id,
    rol_user,
    photo_perfil,
    phone_number,
  } = req.body;
  console.log('NO FUNCIONA', req.body)
  const existingUserByEmail = await db.User.findOne({
    where: { address_mail },
  });

  if (existingUserByEmail)
    return res.status(409).json({
      code: 409,
      message: "Ya existe un usuario registrado con ese email",
    });

  const hashedPassword = await hash(password, 12);
  const user = {
    _id: uuidv4(),
    firstname,
    lastname,
    address_mail,
    password: hashedPassword,
    google_id,
    rol_user,
    photo_perfil,
    phone_number,
  };

  await db.User.create(user).then((us) => {
    return res.json({
      data: us,
      status: 201,
      created: "OK!!",
    });
  });
};

module.exports = userRegisterController;
