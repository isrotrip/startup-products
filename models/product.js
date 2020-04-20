'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Product extends Model {}

  Product.init({
    name: DataTypes.STRING,
    totalAsset: DataTypes.STRING,
    type: DataTypes.STRING,
    onBusiness: DataTypes.BOOLEAN,
    StartupId: DataTypes.INTEGER
  }, {
    sequelize
  });

  Product.associate = function(models) {
    
  };

  return Product;
};