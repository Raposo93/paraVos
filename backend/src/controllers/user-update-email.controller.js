const { compare } = require("bcrypt");
const db = require("../database/models");

const userUpdateEmailController = async (req, res) => {
  const { id } = req;
  const { address_mail, password } = req.body;

  const existingUserById = await db.User.findByPk(id);

  if (!existingUserById)
    return res.status(401).send({ errors: ["Usuario no autorizado"] });

  const checkPassword = await compare(password, existingUserById.password);
  if (!checkPassword)
    return res.status(401).send({ errors: ["Credenciales incorrectas"] });

  existingUserById.address_mail = address_mail;

  await db.User.update({ address_mail }, { where: { _id: id } });

  return res
    .status(200)
    .send({
      code: 200,
      Message: "Correo del usuario actualizado correctamente",
    });
};

module.exports = userUpdateEmailController;
