const express = require("express");

const router = express.Router();

router.post("/add-item", (req, res, next) => {
  console.log(req.body);
  res.redirect("/add-item");
});

router.get("/add-item", (req, res, next) => {
  res.send(`<form method="POST" action="/add-item">
          <input type="text" name="message"/>
          <button type="submit">Button</button>
      </form>`);
});

module.exports = router;
