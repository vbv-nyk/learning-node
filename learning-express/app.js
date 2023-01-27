const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const adminPage = require("./routes/admin");
const shopPage = require("./routes/shop");

const path = require("path");
const rootDir = require.main.path;

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminPage);
app.use(shopPage);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page404.html"));
});

app.listen(3000);
