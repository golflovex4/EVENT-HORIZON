const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

var Plane = [
    {
        img : "img/Logo/pexels-olia-danilevich-4974914 1.png",
        name : "",
        Crew : "",
        Fuel capacity : ""
        Maximum speed:"",
        Range:"",
        Combat range:"",
        Guns:"",
        Hardpoints:""
    },
    {
        img : "img/Logo/pexels-olia-danilevich-4974914 1.png",
        name : "",
        Crew : "",
        Fuel capacity : ""
        Maximum speed:"",
        Range:"",
        Combat range:"",
        Guns:"",
        Hardpoints:""
    }
];


//Set & Call EJS
app.set('view engine','ejs')

//conect folder
app.use(express.static('img'))
app.use(express.static('CSS'))

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