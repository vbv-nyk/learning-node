const express = require("express");
const prodsController = require("../controller/products");

const router = express.Router();

router.post("/add-item", prodsController.postAddItem);

router.get("/add-item", prodsController.getAddItem);

module.exports = router;
