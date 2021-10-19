// 1. PĘTLA FOR

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// PĘTLA W PĘTLI

for (var i=0; i<10; i++) {

    console.log("Główna pętla nr: " + i);

    for (let j=0; j<6; j++) {
        console.log("Pętla wewnętrzna nr: ");
    }
}

// 2. while
var x = 10;

do {
    i+=1;
    console.log(i);
    
 } while (i<5);