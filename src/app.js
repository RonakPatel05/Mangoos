var MongoClient = require("mongodb").MongoClient, format = require("util").format;

MongoClient.connect("mongodb://localhost:3000", function(err,db){

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

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique=true,
    //trim=true,
  },
  ctype: {
    // typeString,
    required: true,
    lowercase: true,
    enum: ["frontend", "backend", "database"],
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("videos count should not be negative");
      }
    },
  },
  author: String,
  email: {
    // type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is inValid");
      }
    },
  },
  active: Boolean,
  Date: {
    type: Date,
    default: Date.now,
  },
});

const playlist = new mongoose.model("playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new playlist({
      name: "react Js",
      ctype: "Front End",
      videos: 70,
      author: "Ronak Patel",
      active: true,
    });

    const jsPlaylist = new playlist({
      name: "js",
      ctype: "Front End",
      videos: 150,
      author: "Ronak Patel",
      active: true,
    });

    const mongoplaylist = new playlist({
      name: "mongo js",
      ctype: "database",
      videos: 10,
      author: "Ronak Patel",
      active: true,
    });

    const maongoosePlaylist = new playlist({
      name: "mongo js",
      ctype: "database",
      videos: 10,
      author: "Ronak Patel",
      active: true,
    });

    const html_cssplaylist = new playlist({
      name: "html_css",
      ctype: "Front End",
      videos: 30,
      author: "Ronak Patel",
      active: true,
    });
    const result = await playlist.insertMany([
      reactPlaylist,
      jsPlaylist,
      mongoPlaylist,
      maongoosePlaylist,
      html_css,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();

const getDocument = async () => {
  try {
    const result = await playlist
      .find({ ctype: "Front End" })
      .select({ name: 1 });
    //count karva mate .countDocument();
    ///limit(1) lakhvthi limit nakhi sakhy
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// getDocument();

//update the document

const updateDocument = async () => {
  try {
    const result = await playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Javascript Ronak",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    console.log(err);
  } catch (err) {
    console.log(err);
  }
};
updateDocument("id");

//delete the  document

const deleteDocument = async (_id) => {
  try {
    const result = await playlist.findByIdAndUpdate({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//  deleteDocument("id");
