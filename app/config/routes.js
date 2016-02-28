const express = require("express");
const lsRoutes = require('express-ls-routes');
const app = express();

app.set('view engine', 'jade');

app.get("/text", lsRoutes(app), (req, res) => {
  res.render("text")
});

app.listen("3000");
