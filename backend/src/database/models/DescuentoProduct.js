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
  let configurations = { tableName: "descuentoproducts" };

  const DescuentoProduct = sequelize.define(alias, columns, configurations);
  //relacion descuento - Producto muchos  a muchos
  DescuentoProduct.associate = function (models) {
    DescuentoProduct.belongsTo(models.Products, {
      as: "product",
      foreignKey: "productId",
    });
    models.Products.hasMany(DescuentoProduct);
    DescuentoProduct.belongsTo(models.Descuentos, {
      as: "descuento",
      foreignKey: "descuentoId",
    });
    models.Descuentos.hasMany(DescuentoProduct, { as: "descuentoProducts" });
  };

  return DescuentoProduct;
};
