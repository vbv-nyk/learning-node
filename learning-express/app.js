const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { router: adminPage, items } = require("./routes/admin");
const shopPage = require("./routes/shop");

const path = require("path");
const rootDir = require.main.path;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminPage);
app.use(shopPage);
app.use("/", (req, res, next) => {
  res.status(404).render("page404");
});

app.listen(3000);
