'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Tradesman, {
        foreignKey: "tradesmanId",
        as: "tradesman",
      });
      Address.belongsTo(models.Client, { foreignKey: "clientId", as: "client" })
    }
  }
  Address.init({
    plotNumber: DataTypes.INTEGER,
    street: DataTypes.STRING,
    area: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};