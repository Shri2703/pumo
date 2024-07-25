const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
})

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id
  UserModel.findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err))
})

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id
  UserModel.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
    { new: true }
  )
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id
  UserModel.findByIdAndDelete(id)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch((err) => res.status(500).json(err))
})

app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      if (err.code === 11000) {
        res.status(400).json({ message: 'User already exists', error: err })
      } else {
        res.status(500).json(err)
      }
    })
})

mongoose
  .connect(
    'mongodb+srv://poornashri2703:m7cBdGD2dEbTVdMz@cluster0.vahghlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
