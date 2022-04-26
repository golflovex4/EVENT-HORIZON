const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

var Plane = [
    {
        img :          "img/J-20.jpg",
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
        img :          "img/J-10.jpg",
        name :         "Chengdu J-10",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : 4950L (3860 Kg)",
        Maximum_Speed : "MaximumSpeed : Mach 1.8",
        Range :         "Range : 2,950 km (Ferry rang)",
        Combat_Range :  "CombatRange : 1,240 or 2,600 km",
        Service_Ceiling:"Service_Ceiling : 17,000 m",
        Guns :          "Guns : 1× Gryazev-Shipunov GSh-23",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 5600 kg"
    },
    {
        img :          "img/J-16.jpg",
        name :         "Shenyang J-16",
        Crew :         "Crew : 2",
        Fuel_Capacity : "FuelCapacity : ----",
        Maximum_Speed : "MaximumSpeed : Mach 2",
        Range :         "Range : 3000 km",
        Combat_Range :  "CombatRange : 3000 km",
        Service_Ceiling:"Service_Ceiling : 20 km",
        Guns :          "Guns : 1 x 30 mm cannon (150 rounds)",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : ----"
    },
    {
        img :          "img/J-11.jpg",
        name :         "Shenyang J-11",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : 9,400 kg",
        Maximum_Speed : "MaximumSpeed : Mach 2.1",
        Range :         "Range : 3,530 km",
        Combat_Range :  "CombatRange : 1,500 km",
        Service_Ceiling:"Service_Ceiling : 19,000 m",
        Guns :          "Guns : 1× 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  ----"
    },
    {
        img :          "img/Su-30.jpg",
        name :         "Sukhoi Su-30",
        Crew :         "Crew : 2",
        Fuel_Capacity : "FuelCapacity : 9,400 kg",
        Maximum_Speed : "MaximumSpeed : Mach 2",
        Range :         "Range : 3000 km",
        Combat_Range :  "CombatRange : ----",
        Service_Ceiling:"Service_Ceiling : 17 km",
        Guns :          "Guns : 1 × 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 8,000 kg"
    },
    {
        img :          "img/Su-27.jpg",
        name :         "Sukhoi Su-27",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : 9,400 kg",
        Maximum_Speed : "MaximumSpeed : 2,500 km/h",
        Range :         "Range : 3,530 km",
        Combat_Range :  "CombatRange : ----",
        Service_Ceiling:"Service_Ceiling : 19 km",
        Guns :          "Guns : 1 × 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity :  4,430 kg"
    },
    {
        img :          "img/Su-35.jpg",
        name :         "Sukhoi Su-35",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : 11,500 kg",
        Maximum_Speed : "MaximumSpeed : 2,400 km/h",
        Range :         "Range : 3,600 km",
        Combat_Range :  "CombatRange : 1,600 km",
        Service_Ceiling:"Service_Ceiling : 18 km",
        Guns :          "Guns : 1 × internal 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 8,000 kg"
    },
    {
        img :          "img/J-7.jpg",
        name :         "Chengdu J-7",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : ----",
        Maximum_Speed : "MaximumSpeed : Mach 2",
        Range :         "Range : 2,200 km (Ferry range)",
        Combat_Range :  "CombatRange : 850 km",
        Service_Ceiling:"Service_Ceiling : 17 km",
        Guns :          "Guns : 2× 30 mm Type 30-1 cannon, 60 rounds per gun",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 2,000"
    },
    {
        img :          "img/J-8.jpg",
        name :         "Shenyang J-8",
        Crew :         "Crew : 1",
        Fuel_Capacity : "FuelCapacity : ----",
        Maximum_Speed : "MaximumSpeed : 2,300 km/h",
        Range :         "Range : ----",
        Combat_Range :  "CombatRange : 1,000 km",
        Service_Ceiling:"Service_Ceiling : 18 km",
        Guns :          "Guns : 1 x 23mm Type 23-III cannon",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : ----"
    },
    {
        img :          "img/JH-7.jpg",
        name :         "Xi'an JH-7",
        Crew :         "Crew : 2",
        Fuel_Capacity : "FuelCapacity : ",
        Maximum_Speed : "MaximumSpeed : Mach 1.52",
        Range :         "Range : ----",
        Combat_Range :  "CombatRange : 1,760 km",
        Service_Ceiling:"Service_Ceiling : 16 km",
        Guns :          "Guns : 1× 23mm twin-barrel GSh-23L",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 9,000 kg"
    },
    {
        img :          "img/H-6.jpg",
        name :         "Xian H-6",
        Crew :         "Crew : 4",
        Fuel_Capacity : "FuelCapacity : ----",
        Maximum_Speed : "MaximumSpeed : 1,050 km/h",
        Range :         "Range : 6,000 km",
        Combat_Range :  "CombatRange : 1,800 km",
        Service_Ceiling:"Service_Ceiling : 12 km",
        Guns :          "Guns : 2× 23 mm Nudelman-Rikhter NR-23 cannons ..etc",
        Maximum_Weapon_Capacity :   "Maximum weapon capacity : 12,000 kg (of free-fall weapons)"
    }
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