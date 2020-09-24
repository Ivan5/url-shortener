const express = require("express");
const mongoose = require("mongoose");
const app = express();

const ShortUrl = require("./models/url");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/short", async function (req, res) {
  const record = new ShortUrl({
    full: "test",
  });

  await record.save();
  res.json({ ok: 1 });
});

mongoose.connect("mongodb://localhost:27017/short", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", function () {
  app.listen(5000, function () {
    console.log("Server started");
  });
});
