module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    imageA: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    imageB: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    imageC: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: dataTypes.TEXT(200),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
    price: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    categoryId: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    destacado: {
      type: dataTypes.TINYINT(5),
      allowNull: true,
    },
    descuento: {
      type: dataTypes.STRING(50),
      allowNull: true,
    },

  };
  let configurations = { tableName: "products" };

  const Product = sequelize.define(alias, columns, configurations);

  Product.associate = function (models) {
    //relacion productos categorias
    Product.belongsTo(models.Categories, {
      as: "category",
      foreignKey: "categoryId",
    })};

  return Product;

 };