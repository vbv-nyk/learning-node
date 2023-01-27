const express = require("express");
const router = express.Router();
const path = require("path");
const { items } = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { items });
});

module.exports = router;
