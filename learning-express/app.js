const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/about-me", (req, res, next) => {
  console.log("Express is handling the path /about-me");
  res.send(`<h1>About me</h1>`);
});

app.use("/", (req, res, next) => {
  res.send(
    "<h1>After checking all above paths, you come here. You did have a long way to go ;)</h1>"
  );
});

app.listen(3000);
