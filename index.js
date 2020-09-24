const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { myVariable: "This is a test" });
});

app.listen(5000, function () {
  console.log("Server started");
});
