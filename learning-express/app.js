const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/thank-you", (req, res, next) => {
  res.send("<h1>Thank you for submitting your feeback</h1>");
});
app.post("/items", (req, res, next) => {
  console.log(req.body);
  res.redirect("/thank-you");
});

app.use("/", (req, res, next) => {
  res.send(`<form method="POST" action="/items">
        <input type="text" name="message"/>
        <button type="submit">Button</button>
    </form>`);
});

app.listen(3000);
