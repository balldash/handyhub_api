const db = require("./app/models");
async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}
testConnection();
