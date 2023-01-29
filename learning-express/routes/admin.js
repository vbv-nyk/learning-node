const express = require("express");
const prodsController = require("../controller/product");

const router = express.Router();
const rootDir = require.main.path;

router.post("/add-item", prodsController.getAddItem);

router.get("/add-item", prodsController.postAddItem);

module.exports = { router };
