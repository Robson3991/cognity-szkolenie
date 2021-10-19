const str = 'Lorem ipsum dolor sit amet';

console.log( str.length ); // długość stringu - 11
console.log( str.charAt(str.length -1) ); // m
console.log( str.toUpperCase() ); // LOREM IPSUM
console.log( str.toLowerCase() ); // lorem ipsum
console.log( str.indexOf('L') ); // pierwszy index danego ciągu znaków
console.log( str.lastIndexOf('m'));
console.log( str.includes('ipsum') ); // zwraca true/false - ES6
console.log( str.substr(5, 10) ); // start , length
console.log( str.substring(5, 10) ); // start, end
console.log( str.slice(5, 10) );
console.log( str.split(' '));

zadanie:

// zwrócić subdomena 

const url = 'http://subdomena.domena.com.pl';

const subdomena = url.split('//')[1].split('.')[0].toUpperCase();

console.log(subdomena);






