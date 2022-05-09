const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

var Plane = [
    {
        img :          "img/J-20.jpg",
        name :         "Chengdu J-20",
        Crew :         "one (pilot)",
        Fuel_Capacity : "12,000 kg",
        Maximum_Speed : "Mach 2.0",
        Range :         "5,500 km",
        Combat_Range :  "2,000 km",
        Service_Ceiling:"20,000 m",
        Guns :          "- - -",
        Maximum_Weapon_Capacity : "11,000 kg "
    },
    {
        img :          "img/J-10.jpg",
        name :         "Chengdu J-10",
        Crew :         "1",
        Fuel_Capacity : "4950L (3860 Kg)",
        Maximum_Speed : "Mach 1.8",
        Range :         "2,950 km (Ferry rang)",
        Combat_Range :  "1,240 or 2,600 km",
        Service_Ceiling:"17,000 m",
        Guns :          "1× Gryazev-Shipunov GSh-23",
        Maximum_Weapon_Capacity :"5600 kg"
    },
    {
        img :          "img/J-16.jpg",
        name :         "Shenyang J-16",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "Mach 2",
        Range :         "3000 km",
        Combat_Range :  "3000 km",
        Service_Ceiling:"20 km",
        Guns :          "1 x 30 mm cannon (150 rounds)",
        Maximum_Weapon_Capacity :"----"
    },
    {
        img :          "img/J-11.jpg",
        name :         "Shenyang J-11",
        Crew :         "1",
        Fuel_Capacity : "9,400 kg",
        Maximum_Speed : "Mach 2.1",
        Range :         "3,530 km",
        Combat_Range :  "1,500 km",
        Service_Ceiling:"19,000 m",
        Guns :          "1× 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :"----"
    },
    {
        img :          "img/Su-30.jpg",
        name :         "Sukhoi Su-30",
        Crew :         "2",
        Fuel_Capacity : "9,400 kg",
        Maximum_Speed : "Mach 2",
        Range :         "3000 km",
        Combat_Range :  "----",
        Service_Ceiling:"17 km",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "8,000 kg"
    },
    {
        img :          "img/Su-27.jpg",
        name :         "Sukhoi Su-27",
        Crew :         "1",
        Fuel_Capacity : "9,400 kg",
        Maximum_Speed : "2,500 km/h",
        Range :         "3,530 km",
        Combat_Range :  "----",
        Service_Ceiling:"19 km",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "4,430 kg"
    },
    {
        img :          "img/Su-35.jpg",
        name :         "Sukhoi Su-35",
        Crew :         "1",
        Fuel_Capacity : "11,500 kg",
        Maximum_Speed : "2,400 km/h",
        Range :         "3,600 km",
        Combat_Range :  "1,600 km",
        Service_Ceiling:"18 km",
        Guns :          "1 × internal 30 mm Gryazev-Shipunov GSh-30-1",
        Maximum_Weapon_Capacity :   "8,000 kg"
    },
    {
        img :          "img/J-7.jpg",
        name :         "Chengdu J-7",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "Mach 2",
        Range :         "2,200 km (Ferry range)",
        Combat_Range :  "850 km",
        Service_Ceiling:"17 km",
        Guns :          "2× 30 mm Type 30-1 cannon, 60 rounds per gun",
        Maximum_Weapon_Capacity :   "2,000"
    },
    {
        img :          "img/J-8.jpg",
        name :         "Shenyang J-8",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "2,300 km/h",
        Range :         "----",
        Combat_Range :  "1,000 km",
        Service_Ceiling:"18 km",
        Guns :          "1 x 23mm Type 23-III cannon",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/JH-7.jpg",
        name :         "Xi'an JH-7",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "Mach 1.52",
        Range :         "----",
        Combat_Range :  "1,760 km",
        Service_Ceiling:"16 km",
        Guns :          "1× 23mm twin-barrel GSh-23L",
        Maximum_Weapon_Capacity :   "9,000 kg"
    },
    {
        img :          "img/H-6.jpg",
        name :         "Xian H-6",
        Crew :         "4",
        Fuel_Capacity : "----",
        Maximum_Speed : "1,050 km/h",
        Range :         "6,000 km",
        Combat_Range :  "1,800 km",
        Service_Ceiling:"12 km",
        Guns :          "2× 23 mm Nudelman-Rikhter NR-23 cannons ..etc",
        Maximum_Weapon_Capacity :   "12,000 kg (of free-fall weapons)"
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

app.get("/Homepage",(req,res) =>{
    res.render('Homepage')
})
app.get("/primordial",(req,res) =>{
    res.render('primordial')
})