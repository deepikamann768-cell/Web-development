//Step1 : import the modules
const express = require('express')

const app = express() //whenever you want express function you have to call the variable app

//Express will create -API/URL/Route(path)
//Methods of communication -get method : Get the data from server

app.get('/login', (req, res)=>{
    res.send("Fill the form to login")
})

//2nd type of app.get
app.get('/', (req, res) => {
res.json({ message: 'Welcome to my API!' });
});
// GET route — returns a list of users
app.get('/users', (req, res) => {
const users = [
{ id: 1, name: 'Alice' }, //array with object : value pair
{ id: 2, name: 'Bob' },
];
res.json(users);
});
// POST route — accepts new data
app.post('/users', (req, res) => {
const newUser = req.body;
res.status(201).json({
message: 'User created!',
user: newUser
});
});



//Start the server it is important otherwise your backend server will not connect with any of and port number and it will not get activated
app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000') //replace this local host to your company name
})