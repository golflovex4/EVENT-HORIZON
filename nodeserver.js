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
        Maximum_Weapon_Capacity :   "12,000 kgพ"
    }
];

var Plane2 = [
    {
        img :          "img/E-2.jpg",
        name :         "Northrop Grumman E-2 Hawkeye",
        Crew :         "5",
        Fuel_Capacity : "----",
        Maximum_Speed : "350 km/h",
        Range :         "----",
        Combat_Range :  "----",
        Service_Ceiling:"34,700 ft",
        Guns :          "----",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/C-2.jpg",
        name :         "Grumman C-2 Greyhound",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "343 km/h",
        Range :         "1,300 km",
        Combat_Range :  "----",
        Service_Ceiling:"33,500 ft",
        Guns :          "-----",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/FA-18.jpg",
        name :         "McDonnell Douglas F/A-18 Hornet",
        Crew :         "2",
        Fuel_Capacity : "10,860 pounds",
        Maximum_Speed : "Mach 1.8",
        Range :         "1,089 nmi",
        Combat_Range :  "400 nmi",
        Service_Ceiling:"50,000 ft",
        Guns :          "1× 20 mm (0.787 in) M61A1 Vulcan",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/AV-8B.jpg",
        name :         "McDonnell Douglas AV-8B Harrier II",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "Mach 0.9",
        Range :         "1,200 nmi",
        Combat_Range :  "300 nmi",
        Service_Ceiling:"----",
        Guns :          "1× General Dynamics GAU-12 Equalizer 25 mm (0.984 in)",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Rafale.jpg",
        name :         "Dassault Rafale",
        Crew :         "2",
        Fuel_Capacity : "16,550",
        Maximum_Speed : "1.4 mach",
        Range :         "----",
        Combat_Range :  "1,850 km",
        Service_Ceiling:"15,835 m",
        Guns :          "1× 30 mm (1.2 in) GIAT 30/M791 autocannon with 125 rounds",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/T-45.jpg",
        name :         "McDonnell Douglas T-45 Goshawk",
        Crew :         "2",
        Fuel_Capacity : "432 US gal",
        Maximum_Speed : "543 kn",
        Range :         "Range : 700 nmi",
        Combat_Range :  "-----",
        Service_Ceiling:"42,500 ft",
        Guns :          "----",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/FA-18F.jpg",
        name :         "Boeing F/A-18E/F Super Hornet",
        Crew :         "2",
        Fuel_Capacity : "26800",
        Maximum_Speed : "1.6 Mach",
        Range :         "1,275 nmi",
        Combat_Range :  "390 nmi",
        Service_Ceiling:"50,000 ft",
        Guns :          "1× 20 mm (0.787 in) M61A2 Vulcan, 412 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/EA-18G.jpg",
        name :         "Boeing EA-18G Growler",
        Crew :         "2",
        Fuel_Capacity : "23714 lb",
        Maximum_Speed : "1.8 mach",
        Range :         "1,275 nmi",
        Combat_Range :  "390 nmi",
        Service_Ceiling:"50,000 f",
        Guns :          "none",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/B-1.jpg",
        name :         "Rockwell B-1 Lancer",
        Crew :         "4",
        Fuel_Capacity : "----",
        Maximum_Speed : "721 kn",
        Range :         "5,100 nmi",
        Combat_Range :  "2,993 nmi",
        Service_Ceiling:"60,000 ft",
        Guns :          "----",
        Maximum_Weapon_Capacity :   "75,000 pounds"
    },
    {
        img :          "img/B-2.jpg",
        name :         "Northrop Grumman B-2 Spirit",
        Crew :         "2",
        Fuel_Capacity : "167,000 pounds",
        Maximum_Speed : "630 mph",
        Range :         "6,900 mi",
        Combat_Range :  "----",
        Service_Ceiling:"50,000 ft",
        Guns :          "----",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/F-15.jpg",
        name :         "McDonnell Douglas F-15 Eagle",
        Crew :         "1",
        Fuel_Capacity : "13,455 lb",
        Maximum_Speed : "Mach 2.5",
        Range :         "----",
        Combat_Range :  "1,061 nmi",
        Service_Ceiling:"65,000 ft",
        Guns :          "1× 20 mm (0.787 in) M61A1 Vulcan 6-barrel rotary cannon",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/F-15E.jpg",
        name :         "McDonnell Douglas F-15E Strike Eagle",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "1,434 kn",
        Range :         "-----",
        Combat_Range :  "687 nmi",
        Service_Ceiling:"60,000 ft",
        Guns :          "1× 20 mm (0.787 in) M61A1 Vulcan 6-barreled Gatling cannon",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/F-22.jpg",
        name :         "Lockheed Martin F-22 Raptor",
        Crew :         "1",
        Fuel_Capacity : "18,000 lb",
        Maximum_Speed : "Mach 2.25",
        Range :         "1,600 nmi",
        Combat_Range :  "460 nmi",
        Service_Ceiling:"65,000 ft",
        Guns :          "1× 20 mm M61A2 Vulcan rotary cannon, 480 rounds",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/F-35A.jpg",
        name :         "Lockheed Martin F-35 Lightning II",
        Crew :         "1",
        Fuel_Capacity : "18,250 lb",
        Maximum_Speed : "Mach 1.6",
        Range :         "1,500 nmi",
        Combat_Range :  "669 nmi",
        Service_Ceiling:"50,000 ft",
        Guns :          "1 × 25 mm (0.984 in) GAU-22/A 4-barrel rotary cannon",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/F-16.jpg",
        name :         "General Dynamics F-16 Fighting Falcon",
        Crew :         "1",
        Fuel_Capacity : "7,000 pounds",
        Maximum_Speed : "Mach 2.05",
        Range :         "----",
        Combat_Range :  "295 nmi",
        Service_Ceiling:"58,000 ft",
        Guns :          "1 × 20 mm (0.787 in) M61A1 Vulcan 6-barrel rotary cannon",
        Maximum_Weapon_Capacity :   "-----"
    }
];

var Plane3 = [
    {
        img :          "img/Typhoon.jpg",
        name :         "Eurofighter Typhoon",
        Crew :         "2",
        Fuel_Capacity : "4,996 kg",
        Maximum_Speed : "2,125 km/h",
        Range :         "2,900 km",
        Combat_Range :  "1,389 km",
        Service_Ceiling:"19,812 m",
        Guns :          "1 × 27 mm Mauser BK-27 revolver cannon with 150 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/F-4.jpg",
        name :         "McDonnell Douglas F-4 Phantom II",
        Crew :         "2",
        Fuel_Capacity : "1,994 US gal",
        Maximum_Speed : "1,280 kn",
        Range :         "----",
        Combat_Range :  "370 nmi",
        Service_Ceiling:"60,000 ft",
        Guns :          "20 mm (0.787 in) M61A1 Vulcan",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/GR4.jpg",
        name :         "Tornado GR4",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "2,400 km/h",
        Range :         "1,390 km",
        Combat_Range :  "----",
        Service_Ceiling:"15,240 m",
        Guns :          "1 × 27 mm (1.06 in) Mauser BK-27",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/Mirage_III.jpg",
        name :         "Dassault Mirage III",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "2,350 km/h",
        Range :         "----",
        Combat_Range :  "1,200 km",
        Service_Ceiling:"17,000 m",
        Guns :          "2× 30 mm (1.181 in) DEFA 552 cannon",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Etendard.jpg",
        name :         "Dassault Étendard IV",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "1,099 km/h",
        Range :         "3,300 km",
        Combat_Range :  "----",
        Service_Ceiling:"15,500 m",
        Guns :          "2 × 30 mm (1.18 in) DEFA 552",
        Maximum_Weapon_Capacity :   "----"
    }
];

var Plane4 = [
    {
        img :          "img/MiG-29.jpg",
        name :         "Mikoyan MiG-29",
        Crew :         "1",
        Fuel_Capacity : "3,500 kg",
        Maximum_Speed : "2,400 km/h",
        Range :         "1,430 km",
        Combat_Range :  "----",
        Service_Ceiling:"18,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 150 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/MiG-31.jpg",
        name :         "Mikoyan MiG-31",
        Crew :         "2",
        Fuel_Capacity : "35,550 lb",
        Maximum_Speed : "3,000 km/h",
        Range :         "3,000 km",
        Combat_Range :  "1,450 km",
        Service_Ceiling:"25,000 m",
        Guns :          "1 × 23 mm Gryazev-Shipunov GSh-6-23M rotary cannon with 800 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/MiG-35.jpg",
        name :         "Mikoyan MiG-35",
        Crew :         "2",
        Fuel_Capacity : "----",
        Maximum_Speed : "2,100 km/h",
        Range :         "2,100 km",
        Combat_Range :  "1,000 km",
        Service_Ceiling:"16,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 100 rounds",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/Su-27.jpg",
        name :         "Sukhoi Su-27",
        Crew :         "1",
        Fuel_Capacity : "9,400 kg",
        Maximum_Speed : "2,500 km/h",
        Range :         "3,530 km",
        Combat_Range :  "----",
        Service_Ceiling:"19,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 150 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Su-30.jpg",
        name :         "Sukhoi Su-30",
        Crew :         "2",
        Fuel_Capacity : "9,400 kg",
        Maximum_Speed : "2,120 km/h",
        Range :         "3,000 km",
        Combat_Range :  "----",
        Service_Ceiling:"17,300 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 150 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Su-34.jpg",
        name :         "Sukhoi Su-34",
        Crew :         "2",
        Fuel_Capacity : "12,100 kg",
        Maximum_Speed : "1,900 km/h",
        Range :         "----",
        Combat_Range :  "1,100 km",
        Service_Ceiling:"17,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 180 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Su-35.jpg",
        name :         "Sukhoi Su-35",
        Crew :         "1",
        Fuel_Capacity : "11,500 kg",
        Maximum_Speed : "2,400 km/h",
        Range :         "3,600 km",
        Combat_Range :  "1,600 km",
        Service_Ceiling:"18,000 m",
        Guns :          "1 × internal 30 mm Gryazev-Shipunov GSh-30-1 autocannon with 150 rounds",
        Maximum_Weapon_Capacity :   "-----"
    },
    {
        img :          "img/Su-57.jpg",
        name :         "Sukhoi Su-57",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "Mach 2",
        Range :         "3,500 km",
        Combat_Range :  "----",
        Service_Ceiling:"20,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Su-24.jpg",
        name :         "Sukhoi Su-24",
        Crew :         "2",
        Fuel_Capacity : "11,100 kg",
        Maximum_Speed : "1,654 km/h",
        Range :         "----",
        Combat_Range :  "615 km",
        Service_Ceiling:"11,000 m",
        Guns :          "1 × internal 23 mm Gryazev-Shipunov GSh-6-23M rotary cannon with 500 rounds",
        Maximum_Weapon_Capacity :   "----"
    },
    {
        img :          "img/Su-25.jpg",
        name :         "Sukhoi Su-25",
        Crew :         "1",
        Fuel_Capacity : "----",
        Maximum_Speed : "975 km/h",
        Range :         "1,000 km",
        Combat_Range :  "750 km",
        Service_Ceiling:"7,000 m",
        Guns :          "1 × 30 mm Gryazev-Shipunov GSh-30-2 autocannon with 250 rounds",
        Maximum_Weapon_Capacity :   "----"
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

app.get("/CHINA",(req,res) =>{
    res.render('content', {obj_Plane : Plane})
})
app.get("/USA",(req,res) =>{
    res.render('content', {obj_Plane : Plane2})
})
app.get("/EUROPE",(req,res) =>{
    res.render('content', {obj_Plane : Plane3})
})
app.get("/RUSSIA",(req,res) =>{
    res.render('content', {obj_Plane : Plane4})
})

app.get("/index",(req,res) =>{
    res.render('index')
})
app.get("/primordial",(req,res) =>{
    res.render('primordial')
})
app.get("/contractus",(req,res) =>{
    res.render('contractus')
})