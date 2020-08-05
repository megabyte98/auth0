const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  skills:{
    type: [String],
    required:true,
  },
  perks:{
    type:String,
    required:true
  },
  eligibility:{
      type:String,
      required:true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", JobSchema);