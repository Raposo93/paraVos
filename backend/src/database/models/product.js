module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
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
    caregoryId: {
      type:dataTypes.STRING(100),
      allowNull: false
    },

  };
  let configurations = { tableName: "products" }; 

  const Product = sequelize.define(alias, columns, configurations);
  
  Product.associate = function (models) {
    //relacion productos categorias
    Product.belongsTo (models.Categories, {
      as: "category",
      foreignKey: "categoryId",
    }),
    //relacion productos descuento a traves de la tabla pivote descuentoProducts 
    Product.associate = function (models) {
      Product.belongsToMany(models.Descuentos, {
        as: "descuentos",
        through: "descuentoProducts",
        foreignKey: "descuentoId",
        otherKey: "productId",
        timestamps: false,
      });
    };
  }
  
  return Product;
};
