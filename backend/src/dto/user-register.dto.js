const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");
const addFormats = require("ajv-errors");
const addErrors = require("ajv-formats");

const {
  idDTOSchema,
  firstnameDTOSchema,
  lastnameDTOSchema,
  address_mailDTOSchema,
  passwordDTOSchema,
} = require("../libs/dto-types");

const RegisterDTOSchema = Type.Object(
  {
    _id: idDTOSchema,
    firstname: firstnameDTOSchema,
    lastname: lastnameDTOSchema,
    address_mail: address_mailDTOSchema,
    password: passwordDTOSchema,
    google_id: Type.String(),
    rol_user: Type.String(),
    photo_perfil: Type.String(),
    phone_number: Type.String(),
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

addFormats(ajv, ["email", "uuid"]);
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

const userRegisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid)
    return res.status(400).send({
      errors: validateSchema.errors.map((error) => error.message),
    });

  next();
};

module.exports = userRegisterDTO;
