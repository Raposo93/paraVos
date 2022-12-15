const db = require("../database/models");

const userProfileController = async (req, res) => {
  const { id } = req;

  const existingUserById = await db.User.findByPk(id);
  console.log(existingUserById);
  if (!existingUserById) return res.status(401).send("Usuario no Autorizado");

  const { _id, firstname, lastname, address_mail } = existingUserById;

  return res.send({ _id, firstname, lastname, address_mail });
};

module.exports = userProfileController;
