module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  const columns = {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: dataTypes.STRING,
    },
    firstname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    address_mail: {
      type: dataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    google_id: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    rol_user: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    photo_perfil: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: dataTypes.STRING,
      allowNull: true,
    },
  };
  let configurations = { tableName: "user" };

  const User = sequelize.define(alias, columns, configurations);

  return User;
};
