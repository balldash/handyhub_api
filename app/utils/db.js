const { Sequelize } = require("sequelize");
require("dotenv").config();

const config = require("../../config/config.json")[
  process.env.NODE_ENV || "development"
];

// Initialize Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false, // Disable SQL logging
  }
);

// Load models
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models (update paths to actual model files)
db.User = require("../models/user")(sequelize, Sequelize);

module.exports = db;
