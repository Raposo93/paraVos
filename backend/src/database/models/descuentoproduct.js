module.exports = (sequelize, dataTypes) => {
  let alias = "DescuentoProducts";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
    },
    productId: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    descuentoId: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    fechaInicio: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    fechaFin: {
      type: dataTypes.DATE,
      allowNull: false,
    },

  };
  let configurations = { tableName: "descuentoproducts" }; //Lo utilizo cuando ponemos as

  const DescuentoProduct = sequelize.define(alias, columns, configurations);
  
  //TODO  => realizar asociaciones
  
  return DescuentoProduct;
};
