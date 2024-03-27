const express = require('express');
const mogoose = require('mongoose');
const Product = require('./models/product.model.js')
const app = express()

// 1yR6TvUvpbAfyCqN
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res) =>{
    res.send("hello from node is running on this port")
});

app.get('/api/products', async(req,res) =>{
  try{
    const Products = await Product.find();
    res.status(200).json(Products); 
  }catch(error){
    res.status(500).json({message:error.message});
  }
});

app.get('/api/products/:id',async(req,res) =>{
  try{
    const {id} = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  }catch(error){
    res.status(500).json({message:error.message})
  }
});


app.post('/api/products', async (req, res) => {
  try{
  const product = await Product.create(req.body);
  res.status(200).json(product);
  }catch (error) {
  res.status(500).json({message: error.message});
  }
});  


// app.use("/api/products", productRoute);

mogoose.connect("mongodb+srv://PoornashriAPI:1yR6TvUvpbAfyCqN@cluster0.gk6ac7u.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
});



