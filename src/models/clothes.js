"use strict";

const clothes = (sequelize, DataTypes) =>
  sequelize.define("Clothes", {
    // id column will be added by default with datatibe SERIAL
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  });

module.exports = clothes;
