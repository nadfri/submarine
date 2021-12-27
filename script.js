"use strict";
exports.__esModule = true;
var fs = require("fs");
var array = fs.readFileSync('numbers.txt').toString().split("\n");
var gamma = "";
var epslion = "";
/*Gamma*/
for (var i = 0; i < 12; i++) {
    var zeros = 0;
    var ones = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        //
        if (item[i] === "0")
            zeros++;
        else
            ones++;
    }
    if (zeros > ones) {
        gamma += "0";
        epslion += "1";
    }
    else {
        gamma += "1";
        epslion += "0";
    }
    //
}
var gammaInt = parseInt(gamma, 2);
var epslionInt = parseInt(epslion, 2);
var energy = gammaInt * epslionInt;
console.log("Gamma: " + gammaInt);
console.log("Espilon " + epslionInt);
console.log("Energy: " + energy);
