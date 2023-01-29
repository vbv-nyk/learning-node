const express = require("express");
const bodyParse = require("body-parser");
const testRouter = require("./routes/test");
const app = express();

app.set("view engine", "ejs");
app.set("view", "views");

app.use(bodyParse.urlencoded({ extended: true }));
app.use("/admin", testRouter);
app.use("/", (req, res) => {
  app.render("homepage");
});

app.listen(3000);
