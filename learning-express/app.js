const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("You're in the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("You're in the second middleware");
  res.send("<h1>Congrats on making it through the middlewares</h1>");
});

app.listen(3000);
