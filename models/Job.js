const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  description: {
    type: String,
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
  },
  eligibility:{
      type:String,
  },
  tag:{
    type:String,
  },
  jobApplications: [
    {
      user:{
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      name: {
        type: String,
        required: true,
      },
      education: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      skills: {
        type: [String],
        required: true,
      },
      bio: {
        type: String,
      },
      githubusername: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      mail: {
        type: String,
      }
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", JobSchema);