const mongoose = require("mongoose");
const name=process.env.DB_USERNAME
const pass=process.env.DB_PASSWORD
mongoose.connect(
  "mongodb+srv://"+name+":"+pass+"@cluster0.rov3q.mongodb.net/mydata?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  ).then(()=>{console.log("Db connected")});  

module.exports = mongoose