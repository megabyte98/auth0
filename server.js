const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');

//connect database
connectDB();

app.use(express.json({ extended: false }));
app.use(cors())
//routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/job",require("./routes/api/job"));


if(process.env.NODE_ENV === "production"){
 app.use(express.static("./client/build"));

 app.get("*",(req, res)=>{
   res.sendFile(path.resolve(__dirname,"./client","build","index.html"));
 }); 
}



app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is listening at ${PORT}`);
  }
});
