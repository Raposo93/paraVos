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

  console.log(existingUserById.address_mail);
  await db.User.update({ address_mail }, { where: { id } }).then((us) => {
    return res.json({
      data: us,
      status: 200,
      created: "OK!!",
    });
  });
};

module.exports = userUpdateEmailController;
