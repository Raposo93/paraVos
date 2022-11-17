const jwt = require("jsonwebtoken");
const secretToken = process.env.SECRET_TOKEN;

const isAuthenticated = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return res.status(403).json({ error: true, cause: "the token is missing" });
  }

  jwt.verify(token, secretToken, (err, user) => {
    console.log(user, "response de jwt");
    if (err) {
      return res.status(401).json({ cause: "No authorizated" });
    }
    req.body.user = user;
    next();
  });
};

module.exports = { isAuthenticated };
