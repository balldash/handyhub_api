'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Offer.belongsTo(models.Tradesman, {
        foreignKey: "tradesmanId",
        as: "tradesman",
      });
      Offer.belongsTo(models.Client, { foreignKey: "userId", as: "user" });
      Offer.belongsTo(models.Job, { foreignKey: "tradeId", as: "job" });
    }
  }
  Offer.init({
    tradeId: DataTypes.STRING,
    tradesmanId: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    message: DataTypes.STRING,
    response: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};