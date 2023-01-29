const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { router: adminPage, items } = require("./routes/admin");
const shopPage = require("./routes/shop");

const path = require("path");
const { getError } = require("./controller/error");
const rootDir = require.main.path;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminPage);
app.use(shopPage);
app.use("/", getError);

app.listen(3000);
