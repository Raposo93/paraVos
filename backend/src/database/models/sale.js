module.exports = (sequelize, dataTypes) => {
  let alias = "Sales";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
    },
    userId: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    fecha: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: dataTypes.FLOAT(50),
      allowNull: false,
    },
  };
  let configurations = { tableName: "sales" }; 

  const Sale = sequelize.define(alias, columns, configurations);
  
  //Sale.associate = function (models) {
  
   //Relacion venta usuario
   //Sale.belongsTo(models.Users,
   // {
   //   as: "user",
   //   foreignKey: "userId",
   // });
   // models.Users.hasMany(Sale, { as: "recuperados" });
  //}

  
  return Sale;
};
