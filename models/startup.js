'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Startup extends Model {}

  Startup.init({
    name: DataTypes.STRING,
    business: DataTypes.STRING,
    bornYear: DataTypes.DATE
  }, {
    sequelize
  });

  Startup.associate = function(models) {
    Startup.hasMany(models.Product, { as: 'products' });
  };

  return Startup;
};