const express = require('express');
const mongoose= require('mongoose');
const app = express();

mongoose
  .connect(
    "mongodb+srv://poornashri2703:poornashri2703@cluster0.c1ehktz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => {
    console.log(e);
});

app.get("/", (req,res) =>{
    res.send("node response")
    
});





app.listen(3000,() =>{
    console.log("server is running");
})
