var fs = require('fs')
var User = require("./userSearch.js")

function WeatherAdmin(){
    this.newUserSearch = function (name, location){
        var newUser = new User (name, location)
        newUser.getWeather()
        fs.appendFile('log.txt', [`${newUser.name}, ${newUser.location}, ${newUser.time} \n`], function(err){
            if(err) console.log(err);
        })
    }
    this.getData = function(){
        fs.readFile("log.txt", "utf8", function(err, data) {
            if(err) console.log(err);
            console.log(data)
        });
    }
}

// var admin = new WeatherAdmin
// // admin.newUserSearch('mary', 'minneapolis')
// admin.getData()

module.exports = WeatherAdmin