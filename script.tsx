export {}
import * as fs from 'fs';
const array: string[] = fs.readFileSync('numbers.txt').toString().split("\n");

let gamma:string = "";
let epslion:string = "";

/*Gamma*/
for (let i:number = 0; i < 12; i++) {
  let zeros:number = 0;
  let ones:number = 0;

  for (let item of array) {
    //
    if (item[i] === "0") zeros++;
    else ones++;
  }

  if (zeros > ones) {
    gamma += "0";
    epslion += "1";
  } else {
    gamma += "1";
    epslion += "0";
  }
  //
}

const gammaInt:number = parseInt(gamma, 2);
const epslionInt:number = parseInt(epslion, 2);
const energy:number = gammaInt * epslionInt;

console.log("Gamma: "  + gammaInt);
console.log("Espilon " + epslionInt);
console.log("Energy: " + energy);
