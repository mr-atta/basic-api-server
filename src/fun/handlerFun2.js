"use strict";
const { food } = require("../models/index");

// food
async function getAllFood(req, res) {
  let all = await food.findAll();
  res.status(200).json(all);
}

async function createOneFood(req, res) {
  let foodInfo = req.body;

  let foodItem = await food.create(foodInfo);
  res.status(201).json(foodItem);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);

  let foodItem = await food.findOne({ where: { id: id } });
  res.status(200).json(foodItem);
}

async function updateOneFood(req, res) {
  const id = parseInt(req.params.id);
  let foodInfo = req.body;

  let foodItem = await food.findOne({ where: { id } });
  let updateFoodInfo = await foodItem.update(foodInfo);
  res.status(200).json(updateFoodInfo);
}

async function deleteOneFood(req, res) {
  const id = parseInt(req.params.id);

  let deleteOne = await food.destroy({ where: { id: id } });
  res.status(204).json(deleteOne);
}

module.exports = {
  getAllFood,
  createOneFood,
  getOneFood,
  updateOneFood,
  deleteOneFood,
};
