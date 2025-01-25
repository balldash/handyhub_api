'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tradesman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tradesman.hasMany(models.Offer, {
        foreignKey: "tradesmanId",
        as: "offers",
      });
      Tradesman.hasMany(models.Job, { foreignKey: "tradesmanId", as: "jobs" });
      Tradesman.hasOne(models.Address, {
        foreignKey: "tradesmanId",
        as: "address",
      });
    }
  }
  Tradesman.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    nrc: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    specialization: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tradesman',
    tableName: 'Tradesmen',
  });
  return Tradesman;
};