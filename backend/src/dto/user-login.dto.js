const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");
const addFormats = require("ajv-errors");
const addErrors = require("ajv-formats");
const { address_mailDTOSchema, passwordDTOSchema } = require("./dto-types");

const LoginDTOSchema = Type.Object(
  {
    address_mail: address_mailDTOSchema,
    password: passwordDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "El formato del objeto no es válido",
    },
  }
);

const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ["email"]);
addErrors(ajv);

const validateSchema = ajv.compile(LoginDTOSchema);

const userLoginDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((error) => error.message) });

  next();
};

module.exports = userLoginDTO;
