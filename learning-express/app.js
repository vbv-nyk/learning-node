const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminPage = require("./routes/admin");
const shopPage = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminPage);
app.use(shopPage);
app.use("/", (req, res, next) => {
  res.status(404).send("<h3>Page not found</h.status(404)3>");
});

app.listen(3000);
