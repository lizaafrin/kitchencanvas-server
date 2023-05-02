const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 4000;

const chefInfo = require("./data/chefInfo.json");
const recipes = require("./data/recipeDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefInfo);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`Chef Website is Running on Port: ${port}`);
});
