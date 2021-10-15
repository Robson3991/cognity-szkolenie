const tab = ["Marcin", "Ania", "Piotrek", "Grześ"];

tab.length;

// 1. Sortowanie tablic

const tab = ["Marcin", "Ania", "Piotrek", "Grześ"];
tab.sort();

console.log(tab);

// Sortuje słownikowo - cyfry traktuje jak litery

const tab = [1, 2, 21, 2.1, 32, 3.1];
console.log(tab.sort())

// 

function compareNr(a, b) {
    return a - b
}

const tab = [100, 320, 10, 25, 310, 1200, 400];

const tab3 = tab.sort(compareNr);
console.log( tab3 ); //[10, 25, 100, 310, 320, 400, 1200]

// 2. Pętla po tablicy:

for (let i=0; i<names.length; i++) {
    console.log(i);
    console.log(tab[i]);
}

// 3. tablice wielowymiarowe

const tab = [
    ["a1", "a2", "a3", "a4", "a5", "a6"],
    ["b1", "b2", "b3", "b4", "b5", "b6"],
    ["c1", "c2", "c3", "c4", "c5", "c6"],
]

console.log(tab[0]); //["a1", "a2", "a3", "a4", "a5", "a6"]
console.log(tab[0].length); //6
console.log(tab[0][1]); //"a2"
console.log(tab[2][3]); //"c4"

// 4. Pętla forEach - dla każdego elementu

const tab = ["Marcin", "Monika", "Magda"];

tab.forEach(function(element, index, arr) {
    console.log(element, index, arr)
})

const tabForEach = tab.forEach(function(el) {
    return el.toUpperCase();
});

console.log(tabForEach);

// ------

function printDetails(el, i, arr) {
    console.log(el, i, arr);
}

tab.forEach(printDetails);

const tabForEach = tab.forEach(function(el) {
    return el.toUpperCase();
});

console.log(tabForEach);


// 5. Pętla map - zwraca nową tablicę

const tab = ["Marcin", "Monika", "Magda"];

const upperTabMap = tab.map(function(el) {
    return el.toUpperCase();
});

console.log(upperTabMap)

// 6. Metoda every

const tab = [1, 3, 5, 8, 9];

const allEven = tab.every(el => el % 2 === 0);

console.log(allEven); //false

// 7. Metoda some

const tab = [
    { name : "Piotr", age: 18 },
    { name : "Ania", age: 15 },
    { name : "Monika", age: 16 }
];

//a może chociaż jeden user jest pełnoletni?
console.log( tab.some(el => el.age >= 18) ); //true

// 8. Metoda filter

const tab = ["Marcin", "Monika", "Magda", "Monika", "Piotrek"];

const woman = tab.filter(name => name.endsWith("a"));

console.log(woman);

// 9. Metoda reduce

const tab = [3, 2, 4, 2];

const result = tab.reduce((a, b) => a * b);

//1 iteracja => prev = 3,  curr = 2
//2 iteracja => prev = 6,  curr = 4
//3 iteracja => prev = 24, curr = 2

//wynik = 48
