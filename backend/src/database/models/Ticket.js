module.exports = (sequelize, dataTypes) => {
  let alias = "Tickets";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
    },
    productId: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    salesId: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    price: {
      type: dataTypes.FLOAT(50),
      allowNull: false,
    },
    quantity: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    nameCategoy: {
      type: dataTypes.STRING(50),
    },
    image: {
      type: dataTypes.TEXT(200),
    },
  };
  let configurations = { tableName: "tickets" };

  const Ticket = sequelize.define(alias, columns, configurations);

  Ticket.associate = function (models) {
    //relacion tickets productos
    Ticket.associate = function (models) {
      Ticket.hasMany(models.Products, {
        as: "products",
        foreignKey: "productId",
      }),
        //relacion tickets ventas
        (Ticket.associate = function (models) {
          Ticket.belongsTo(models.Sales, {
            as: "sale",
            foreignKey: "salesId",
          });
        });
    };
  };

  return Ticket;
};
