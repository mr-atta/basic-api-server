"use strict";

const food = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    // id column will be added by default with datatibe SERIAL
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  });

module.exports = food;
