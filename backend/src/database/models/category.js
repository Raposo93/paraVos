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