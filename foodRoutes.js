const express = require("express");
const app = express();

const foodModel = require("./food_table");

app.post("/food", async (request, response) => {
  const foods = new foodModel(request.body)
  try {
    await foods.save();
    response.send(foods);
  } catch (error) {    
    response.status(400).send(error.message);
  }
});

app.get("/food", async (request, response) => { 
    try{
      const foods = await foodModel.find({}); 
      response.send(foods);
    } catch (error) {
      response.status(500).send({message:"server error...."})
    }
});

app.patch("/food/:id", async (request, response) => {
  try {
    const food=await foodModel.findByIdAndUpdate(request.params.id, request.body);
    if(!food) response.status(404).send("Did not updated")
    response.status(200).send({message:"Updated sucessfully...."});
  } catch (error) {
    response.status(404).send({message:"Id is not found...."});
  }
});

app.delete("/food/:id", async (request, response) => {
  try {
    const food = await foodModel.findByIdAndDelete(request.params.id);
    if (!food) response.status(404).send({message:"No item found"});
    response.status(200).send({message:"Specific Id data deleted sucessfully...."});
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = app;