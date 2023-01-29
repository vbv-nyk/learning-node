const express = require("express");
const adminPage = require("./routes/admin");
const bodyParser = require("body-parser");
const path = require("path");

const { getError } = require("./controller/error");
const shopPage = require("./routes/shop");

const rootDir = require.main.path;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminPage);
app.use(shopPage);
app.use("/", getError);

app.listen(3000);
