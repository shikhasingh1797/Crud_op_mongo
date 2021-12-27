const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Shikha:mahi@123@cluster0.rov3q.mongodb.net/myFirstDatabase?retryWrites=true&w=mydata",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  ).then(()=>{console.log("Db connected")});  

module.exports = mongoose