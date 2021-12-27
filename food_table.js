const db = require("./db_connection");
const FoodSchema = new db.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0){
        throw new Error("Negative calories aren't real.")
      }
    },
  },
});

const Food = db.model("Food", FoodSchema);
module.exports = Food;