const db = require("../database/models");

const userUpdateDataController = async (req, res) => {
  const { id } = req;
  const { firstname, lastname } = req.body;

  const existingUserById = await db.User.findByPk(id);
  if (!existingUserById) return res.status(401).send("Usuario no Autorizado");

  existingUserById.firstname = firstname;
  existingUserById.lastname = lastname;

  await db.User.update({ firstname, lastname }, { where: { id } }).then(
    (us) => {
      return res.json({
        data: us,
        status: 200,
        created: "OK!!",
      });
    }
  );

  // return res.send("Datos de Usuario actualizados correctamente");
};

module.exports = userUpdateDataController;
