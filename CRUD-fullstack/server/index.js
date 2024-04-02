const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
 
const app = express()
// pass data from FE-BE
app.use(cors())
// to store the fe data as json format
app.use(express.json())


app.get("/",(req,res) =>{
    UserModel.find({} )
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.get('/getUser/:id',(req,res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json())
    .catch(err => res.json(err))

})

app.post("/createUser" ,(req,res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



mongoose.connect("mongodb+srv://poornashri2703:m7cBdGD2dEbTVdMz@cluster0.vahghlp.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});



