// operacje na typach

const { parentPort } = require("worker_threads");

const str = 'lorem';
const str2 = "ipsum";
const str3 = ``; // ES6
const filename = 'txt';
const number = 10;
const number2 = 23423;

console.log(str + '-' + str2 + '.' + filename);
console.log(`${str}-${str}.${filename}`); // ES6

// 1. Konwersja typów

// konwersja przez konstruktor

console.log(String(number));
console.log(typeof number);
console.log(typeof String(number));

console.log(str + number);

// funkcja

console.log( number.toString() );

parseInt('10dfgdf')

typeof number

console.log(parseFloat(number2).toFixed(2))






