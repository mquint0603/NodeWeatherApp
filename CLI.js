var WeatherAdmin = require('./weatherAdmin.js')

let userType = process.argv[2]
let username = process.argv[3]
let place = process.argv[4]

// for (let i = 4; i < process.argv; i ++){
//     place += process.argv[i]
// }
var admin = new WeatherAdmin

if (userType === 'admin'){
    admin.getData()
} else if (userType === 'user'){
    admin.newUserSearch(username, place)
}