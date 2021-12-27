const express = require("express");
const app = express();
const foodRouter = require("./foodRoutes.js");
app.use(express.json());

app.use(foodRouter);

app.listen(8000, () => {
  console.log("Server is running...");
});