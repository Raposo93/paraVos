module.exports = (sequelize, dataTypes) => {
  let alias = "Datosenvios";
  let columns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER(11),
    },
    postalCode: {
      type: dataTypes.STRING(150),
      allowNull: false,
    },
    city: {
      type: dataTypes.STRING(150),
      allowNull: false
    },
    state: {
      type: dataTypes.STRING(150),
      allowNull: false
    },
    number: {
      type: dataTypes.INTEGER(11),
      allowNull: false
    },
    dept: {
      type: dataTypes.STRING(150),
      allowNull: false
    }
 
  };
  let configurations = { tableName: "datosenvios" }; 

  const Category = sequelize.define(alias, columns, configurations);
    //relacion categoria producto muchos  a uno ( una categoria tiene muchos productos)
    Category.associate = function(models){
      Category.hasMany(models.Products, {
        as: "products",
        foreignKey: "categoryId"
     })
       
   }
  
  return Category;
};