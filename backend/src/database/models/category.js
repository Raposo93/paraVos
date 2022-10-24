module.exports = (sequelize, dataTypes) => {
  let alias = "Categories";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
    },
    nameCategory: {
      type: dataTypes.STRING(11),
      allowNull: false,
    },
    estado: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
    },
    descripcion: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
 
  };
  let configurations = { tableName: "descuentos" }; 

  const Descuento = sequelize.define(alias, columns, configurations);
  
  //TODO  => realizar asociaciones
  
  return Descuento;
};