const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const foodRouter = require("./foodRoutes.js");
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);



app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});

// DB_USERNAME=Shikha
// DB_PASSWORD=mahi@123