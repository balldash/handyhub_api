"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.STRING,
      },
      specialization: {
        type: Sequelize.STRING,
      },
      tradesmanId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tradesmen",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      status: {
        type: Sequelize.STRING,
      },
      completedByTradesman: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      completedByUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      budget: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Jobs");
  },
};
