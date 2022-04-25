const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

var Plane = [
    {
        img :          "img/F-22.jpg",
        name :         "Chengdu J-20",
        Crew :         "Crew : one (pilot)",
        Fuel_Capacity : "FuelCapacity : 12,000 kg",
        Maximum_Speed : "MaximumSpeed : Mach 2.0",
        Range :         "Range : 5,500 km",
        Combat_Range :  "CombatRange : 2,000 km",
        Service_Ceiling:"Service_Ceiling : 20,000 m",
        Guns :          "Guns : - - -",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 11,000 kg "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
    {
        img :          "img/F-22.jpg",
        name :         "",
        Crew :         "Crew : ",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : ",
        Range :         "Range : ",
        Combat_Range :  "CombatRange : ",
        Service_Ceiling:"Service_Ceiling : ",
        Guns :          "Guns : ",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  "
    },
];


//Set & Call EJS
app.set('view engine','ejs')

//conect folder
app.use(express.static('public'))

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

app.get("/index",(req,res) =>{
    res.render('index')
})