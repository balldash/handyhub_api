'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.Tradesman, {
        foreignKey: "tradesmanId",
        as: "tradesman",
      });
      Job.belongsTo(models.Client, { foreignKey: "userId", as: "user" });
      Job.hasMany(models.Offer, { foreignKey: "tradeId", as: "offers" });
    }
  }
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    specialization: DataTypes.STRING,
    tradesmanId: DataTypes.STRING,
    userId: DataTypes.STRING,
    status: DataTypes.STRING,
    completedByTradesman: DataTypes.BOOLEAN,
    completedByUser: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    budget: DataTypes.DECIMAL,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};