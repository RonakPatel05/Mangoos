var MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://localhost:3000', function(err,db){

    if(err){
         throw err;
    } else {
         console.log("Connected");
    }
    db.close();
});



const mongoose = require("mongoose");
const validator = require("validator");

// connection creation and creatin a new db

mongoose.connect("mongodb://localhost:27017/playlists", {
    useNewurlParser: true,
    useUnifiedTopology: true,
    // userCreateIndex,
  })
  .then(() => console.log("connection successfull..."))
  .catch((err) => console.log(err));