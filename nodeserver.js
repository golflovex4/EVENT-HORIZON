const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

var Plane = [
    {
        img : "img/FF-22.png",
        name : "dd",
        Crew : "ddd",
        FuelCapacity : "ddd",
        MaximumSpeed :"ddd",
        Range : "ddd",
        CombatRange : "ddd",
        Guns : "ddd",
        Hardpoints : "ddd"
    },
    {
        img : "img/Logo/F-22",
        name : "ddd",
        Crew : "dddd",
        FuelCapacity : "ddd",
        MaximumSpeed : "dddd",
        Range : "ddd",
        CombatRange : "ddd",
        Guns : "dddddddddddddddddddddddddd",
        Hardpoints : "ddddddd"
    }
];


//Set & Call EJS
app.set('view engine','ejs')

//conect folder
app.use(express.static('img'))
app.use(express.static('views'))

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})
//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")

}) 

app.get("/content",(req,res) =>{
    res.render('content', {obj_Plane : Plane})
})