// 1. Tworzenie wyrażenia regularnego:

const text = 'biegł sobie mały kot. Gonił go wielki kot'

const reg = /kot/;

//lub za pomocą konstruktora

const reg2 = new RegExp("kot" , "gi");

console.log(reg.test(text))
console.log(reg2.test(text))

// 2. Dodatkowe flagi

// i - ignorowanie wielkości znaków
// g - przeszukiwanie wszystkich pasujących fragmentów

const reg3 = /Kot/i;

console.log(reg3.test(text))

// znak ^ oznacza, że szukany fragment musi znajdować się na początku badanego tekstu
// Znak $ oznacza, że szukany fragment musi znajdować się na końcu badanego tekstu

console.log( /^kot/.test("kot lubi ryby") ) //true "kot lubi ryby"
console.log( /^kot/.test("ten kot jest gruby") ) //false

console.log( /kot$/.test("pies i kot") ) //true "pies i kot"
console.log( /kot$/.test("kot i pies") ) //false

// Znak * oznacza 0 lub więcej wystąpień poprzedzającej grupy lub znaku.

console.log( /pan.*/.test("pan") )
console.log( /pan.*/.test("pani") )

// Znak + oznacza 1 lub więcej wystąpień poprzedzającego znaku lub grupy.

const req = /pani+/
console.log( req.test("pani") )
console.log( req.test("paniiiiiii") )
console.log( req.test("pan") )

// Wewnątrz klamer podajemy ilość znaków która ma spełnić kryteria
// przecinek wskazuje ilość minimalną, a druga liczba maksymalną

console.log( /pani{1}/.test("pan") );
console.log( /pani{1}/.test("pani") );
console.log( /pani{1}/.test("paniii") );
console.log( /pani{3}/.test("pani") )

// Znak ? oznacza 0 lub 1 wystąpienie poprzedzającego znaku lub grupy.

const req = /pani?/
console.log( req.test("pan") ) //true
console.log( req.test("pani") ) //true
console.log( req.test("pakuś") ) //false


