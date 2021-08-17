"use strict";

const clothes = require("./clothes");
const food = require("./food");
require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");

const POSTGRES_URI =
  process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/moa01";
// "postgres://localhost/moa01"
// "postgres://localhost:5432/postgres"
const sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
  db: sequelize,
  clothes: clothes(sequelize, DataTypes),
  food: food(sequelize, DataTypes),
};
