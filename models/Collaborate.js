const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollaborateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    projectIdea: {
        type: String,
      },
    reason :{
        type : String
      },
    location : {
        type:String
      },
    githubusername: {
        type: String,
      },
    linkedin: {
        type: String,
      },
    mail: {
        type: String,
      },
    date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Collaborate", CollaborateSchema);