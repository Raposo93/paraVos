const db = require("../database/models");

const userUpdateDataController = async (req, res) => {
  const { id } = req;
  const { firstname, lastname } = req.body;

  const existingUserById = await db.User.findByPk(id);
  if (!existingUserById) return res.status(401).send("Usuario no Autorizado");

  existingUserById.firstname = firstname;
  existingUserById.lastname = lastname;

  await db.User.update({ firstname, lastname }, { where: { _id: id } });

  return res
    .status(200)
    .send({
      code: 200,
      Message: "Datos del usuario actualizados correctamente",
    });
};

module.exports = userUpdateDataController;
