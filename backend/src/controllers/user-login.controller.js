const db = require("../database/models");
const { compare } = require("bcrypt");
const { SignJWT } = require("jose");

const userLoginController = async (req, res) => {
  const { address_mail, password } = req.body;

  const existingUserByEmail = await db.User.findOne({
    where: { address_mail },
  });

  if (!existingUserByEmail)
    return res.status(401).send("Credendiales incorrectas");

  const checkPassword = await compare(password, existingUserByEmail.password);

  if (!checkPassword) return res.status(401).send("Credenciales incorrectas");

  const jwtConstructor = new SignJWT({ id: existingUserByEmail._id });

  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

  return res.send({ jwt });
};

module.exports = userLoginController;
