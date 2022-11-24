const { Type } = require("@sinclair/typebox");

const idDTOSchema = Type.String({
  format: "uuid",
  errorMessage: {
    type: "El tipo de _id no es válido, debe ser un string",
    format: "El formato de _id no es válido, debe ser un uuidv4",
  },
});

const firstnameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: "firstname debe tener al menos dos caracteres de longitud",
    maxLength: "firstname debe tener como maximo 20 caracteres de longitud",
  },
});

const lastnameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: "lastname debe tener al menos cuatro caracteres de longitud",
    maxLength: "lastname debe tener como maximo 50 caracteres de longitud",
  },
});

const address_mailDTOSchema = Type.String({
  format: "email",
  errorMessage: {
    type: "El tipo de email no es válido, debe ser un string",
    format: "El formato de email no es válido",
  },
});

const passwordDTOSchema = Type.String({
  format: "password",
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    type: "El tipo de password no es válido, debe ser un string",
    format:
      "El formato de password no es válido, debe contener al menos una mayuscula, minuscula y un numero",
    minLength: "el password debe contener al menos 10 caracteres de longitud",
    maxLength: "el password debe contener como maximo 25 caracteres",
  },
});

module.exports = {
  idDTOSchema,
  firstnameDTOSchema,
  lastnameDTOSchema,
  address_mailDTOSchema,
  passwordDTOSchema,
};
