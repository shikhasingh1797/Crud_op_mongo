const express = require("express");
const app = express();

const foodModel = require("./food_table");

app.post("/foods", async (request, response) => { 
    try{
      const foods = await foodModel.create({name:"paneer pakauda","calories":3}); 
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      response.send("Data created");
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/food-data", async (request, response) => { 
    try{
      const foods = await foodModel.find({}); 
      console.log(foods);
      response.send(foods);

    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;