const { compare, hash } = require("bcrypt");
const db = require("../database/models");

const userUpdatePasswordController = async (req, res) => {
  const { id } = req;
  const { oldPassword, newPassword } = req.body;

  const existingUserById = await db.User.findByPk(id);

  if (!existingUserById)
    return res.status(401).send({ errors: ["Usuario no autorizado"] });

  const checkPassword = await compare(oldPassword, existingUserById.password);
  if (!checkPassword)
    return res.status(401).send({ errors: ["Credenciales incorrectas"] });

  const hashedPassword = await hash(newPassword, 12);
  existingUserById.password = hashedPassword;

  await db.User.update({ password: hashedPassword }, { where: { _id: id } });

  return res
    .status(200)
    .send({ code: 200, Message: "Cantraseña actualizada correctamente" });
};

module.exports = userUpdatePasswordController;
