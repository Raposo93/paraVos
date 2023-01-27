module.exports = (sequelize, dataTypes) => {
  let alias = "Categories";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nameCategory: {
      type: dataTypes.STRING(11),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(50),
      allowNull: false
    }
 
  };
  let configurations = { tableName: "categories" }; 

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