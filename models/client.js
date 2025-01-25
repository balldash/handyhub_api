'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.hasMany(models.Job, { foreignKey: "userId", as: "jobs" });
      Client.hasMany(models.Offer, { foreignKey: "userId", as: "offers" });
      Client.hasOne(models.Address, { foreignKey: "clientId", as: "address" });
    }
  }
  Client.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    nrc: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};