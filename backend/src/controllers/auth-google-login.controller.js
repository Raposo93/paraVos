const jwt = require("jsonwebtoken");

const verifyGoogleAccessToken = async (google_access_token) => {
  const { data } = await axios(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${google_access_token}`
  );
  return data;
};

const authGoogleLoginController = async (req, res) => {
  const google_access_token = req.headers.authorization.split(" ")[1];
  const verifyToken = verifyGoogleAccessToken(google_access_token);

  const jwtoken = jwt.sign({ _id: verifyToken._id }, `${secretToken}`, {
    expiresIn: 180,
  });

  res.status(200).json({ result: jwtoken });
};

module.exports = authGoogleLoginController;
