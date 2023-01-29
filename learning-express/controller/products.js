const { items, Product } = require("../models/product");
const fs = require("fs");
const path = require("path");
const { json } = require("express");
const products = [];

const rootDir = require.main.path;

exports.getAddItem = (req, res, next) => {
  res.render("admin/admin");
};

exports.postAddItem = (req, res, next) => {
  const p = path.join(rootDir, "data", "product.json");
  const folderPath = path.join(rootDir, "data");
  function addProduct(data) {
    fs.writeFile(p, JSON.stringify(data), (err) => {});
  }
  fs.readdir(folderPath, (err) => {
    if (!err) {
      fs.readFile(p, (err, data) => {
        products.push(...JSON.parse(data), req.body.message);
        addProduct(products);
      });
    } else {
      fs.mkdir("data", () => {
        products.push(req.body.message);
        addProduct(products);
      });
    }
  });
  res.redirect("/admin/add-item");
};

exports.displayItems = (req, res, next) => {
  const p = path.join(rootDir, "data", "product.json");
  const folderPath = path.join(rootDir, "data");
  fs.readFile(p, (err, data) => {
    if (!err) {
      while (items.length) items.pop();
      items.push(...JSON.parse(data));
    }
    res.render("shop/product-list", { items });
  });
};
