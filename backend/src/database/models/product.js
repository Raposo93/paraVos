module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.STRING(50),
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: dataTypes.TEXT(200),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    price: {
      type:dataTypes.INTEGER(11),
      allowNull: false
    },
    descuentoId: {
      type:dataTypes.STRING(100),
      allowNull: false
    },
    caregoryId: {
      type:dataTypes.STRING(100),
      allowNull: false
    },

  };//faltaaaa
  let configurations = { tableName: "products" }; //Lo utilizo cuando ponemos as

  const Product = sequelize.define(alias, columns, configurations);
  
  //TODO  => realizar asociaciones
  
  return Product;
};
