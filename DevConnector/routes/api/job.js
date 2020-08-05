const express = require("express");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Job = require("../../models/Job");
const { check, validationResult } = require("express-validator");
const router = express.Router();


// to create a post
router.post(
  "/",
  [auth,
  [check("description", "Description is required").not().isEmpty(),
  check("eligibility", "Eligibilty is required").not().isEmpty(),
  check("perks","Perks are required").not().isEmpty(),
  check("skills", "Skills are required").not().isEmpty(),]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      skills=[]
      if (req.body.skills) {
        skills = req.body.skills.split(",").map((skill) => skill.trim());
      }
      // console.log(skills)
      const user = await User.findById(req.user.id).select("-password");
      const newJOb = new Job({
        description: req.body.description,
        eligibility:req.body.eligibility,
        skills:skills,
        perks:req.body.perks,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const job = await newJOb.save();
      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

// to get all jobs
router.get("/", auth, async (req, res) => {
    try {
      const jobs = await Job.find().sort({ date: -1 });
      res.json(jobs);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });


  //to delete a job
  // to delete a post
router.delete("/:job_id", auth, async (req, res) => {
    try {
      const job = await Job.findById(req.params.job_id);
      if (job.user.toString() != req.user.id) {
        return res
          .status(401)
          .json({ msg: "User not authorized to delete the post" });
      }
      await job.remove();
      res.json({ msg: "Job removed successfully!!" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  
  
      
  module.exports = router
    
  