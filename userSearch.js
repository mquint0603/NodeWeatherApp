var weather = require('weather-js')
var moment = require('moment')

var UserSearch = function(name, location){
    this.name = name;
    this.location = location;
    this.time = moment().format('MMMM Do YYYY, h:mm:ss a')
    // Date.now()
    // 

    this.getWeather = function (){
        weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            console.log(JSON.stringify(result[0].current, null, 2));
          });
    }
}

// var us = new UserSearch("Mary", "Minneapolis")

// us.getWeather()
// console.log(us.time)

module.exports = UserSearch