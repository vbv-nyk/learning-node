const express = require("express");
const router = express.Router();
const path = require("path");
const { displayItems } = require("../controller/products");

router.get("/", displayItems);

module.exports = router;
