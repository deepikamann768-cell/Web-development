const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const app = express()
app.use(cors()) //enable the cors
app.use(express.json())  //json format

//Step1. connect with MongoDB(Local-Database)
mongoose.connect("mongodb://localhost:27017/UserManagement")

.then(()=> console.log("MongoDB Connected"))
.catch(err=>console.log(err))

//Step2. Define Schema(structur of data)
  const userSchema = new    mongoose.Schema({
        name:String,
        email:String,
        password:String,
      })
     
      
//Step3: Model -Collection
const user = mongoose.model("User" , userSchema)

//Register
app.post('/register' , async(req, res)=>{

    const {name , email, password} = req.body
    if(!name || !email || !password){
      return  res.json({message:'All field must be completed'})
    }

    //Check the existing user
    //Check the existing user
    const existingUser = await user.findOne({ email })
    if(existingUser){
        return res.json({message:'USer already exists'})
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password , 10)

    //Save the data in DB
    const newUser = new user({
        name,
        email,
        password:hashedPassword
    })

    await newUser.save()

    res.json({message:'User Registered Successfully'})


})

app.listen(3000, ()=>{
    console.log("http://localhost:3000 Running")
})