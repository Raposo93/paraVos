const axios = require("axios");
const jwt = require("jsonwebtoken");
const secretToken = process.env.SECRET_TOKEN;

const verifyGoogleAccessToken = async (google_access_token) => {
  const { data } = await axios(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${google_access_token}`
  );
  return data;
};

const googleLogin = async (req, res) => {
  const google_access_token = req.headers.authorization.split(" ")[1];
  const verifyToken = await verifyGoogleAccessToken(google_access_token);

  // aqui buscamos el usuario en la base de datos sino lo registramos

  const token = jwt.sign({ id: verifyToken.user_id }, `${secretToken}`, {
    expiresIn: 180,
  });
  res.status(200).json({ result: token });
};

module.exports = { googleLogin };
