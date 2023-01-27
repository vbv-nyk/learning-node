const express = require("express");

const router = express.Router();

router.get("/thank-you", (req, res, next) => {
  res.send("<h1>Your item has been successfully added</h1>");
});

router.post("/items", (req, res, next) => {
  console.log(req.body);
  res.redirect("/thank-you");
});

router.get("/add-item", (req, res, next) => {
  res.send(`<form method="POST" action="/items">
          <input type="text" name="message"/>
          <button type="submit">Button</button>
      </form>`);
});

module.exports = router;
