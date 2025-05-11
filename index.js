if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const app = express();
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.get("/vlogs", (req, res) => {
  res.render("vlogs");
});

app.get("/vlogs/:id", (req, res) => {
  res.render("vlogShow");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get(/(.*)/, (req, res) => {
  res.render("notfound");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Port:3000 Waiting...");
});
