/*
require: plays role of import statement in JAVA


 */
//var logIn =  require("C:\\Users\\ykara\\OneDrive\\Masaüstü\\JavaScript2020\\JS_Day02\\Pages\\LoginPage.js");
var logIn = require("../JS_Day02/Pages/LoginPage.js") 

console.log( logIn.username);
console.log(logIn.password);