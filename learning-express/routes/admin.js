const express = require("express");
const path = require("path");

const items = [];

const router = express.Router();
const rootDir = require.main.path;

router.post("/add-item", (req, res, next) => {
  console.log(req.body.message);
  res.redirect("/admin/add-item");
});

router.get("/add-item", (req, res, next) => {
  console.log(items);
  res.sendFile(path.join(rootDir, "views", "admin.html"));
});

module.exports = router;
