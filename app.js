<<<<<<< HEAD
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res){
   
    const query = req.body.cityName;

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=89acb0f22872e3cf9cb2044a1d5d8bb5&q="+ query +"&units=metric"
    
    https.get(url, function(respond){
        console.log(respond.statusCode);

        respond.on("data", function(data){
            const weatherData = (JSON.parse(data));
            const temp = weatherData.main.temp;
            const weatherDiscription = weatherData.weather[0].description;
            
            const imageIcon = weatherData.weather[0].icon;

            var image = "http://openweathermap.org/img/wn/"+imageIcon+"@2x.png";
            
            
            res.write("<p><h1>The current Temperature in "+ query +" is  " + temp + "  Degree Celcius</h1>");
            res.write("<h1>The weather is currently  " + weatherDiscription+"</h1> <img src="+ image+">");
           

            res.send();
        })
    })
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
=======
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res){
   
    const query = req.body.cityName;

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=89acb0f22872e3cf9cb2044a1d5d8bb5&q="+ query +"&units=metric"
    
    https.get(url, function(respond){
        console.log(respond.statusCode);

        respond.on("data", function(data){
            const weatherData = (JSON.parse(data));
            const temp = weatherData.main.temp;
            const weatherDiscription = weatherData.weather[0].description;
            
            const imageIcon = weatherData.weather[0].icon;

            var image = "http://openweathermap.org/img/wn/"+imageIcon+"@2x.png";
            
            
            res.write("<p><h1>The current Temperature in "+ query +" is  " + temp + "  Degree Celcius</h1>");
            res.write("<h1>The weather is currently  " + weatherDiscription+"</h1> <img src="+ image+">");
           

            res.send();
        })
    })
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
>>>>>>> 669c506fabdab7255b989679bf1c4c5a2b078431
})