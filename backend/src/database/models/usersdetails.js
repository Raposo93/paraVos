'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersDetails.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    idDatosEnvio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersDetails',
  });
  return UsersDetails;
};