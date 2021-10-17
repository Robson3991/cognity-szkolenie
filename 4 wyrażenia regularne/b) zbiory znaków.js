// Zbiory znaków

// 1. [] Między nawiasy kwadratowe możemy wstawić znaki, które będą stanowić zbiór, który weźmie udział w teście

console.log( /[abc]+/.test("ala") ) //true
console.log( /[abc]+/.test("zuzy") ) //false

// 2. Zakres

/[a-z]/ //a, b, c, ... , x, y, z
/[A-Z]/ //A, B, C, ... , X, Y, Z
/[a-c]/ //a, b, c
/[0-9]/ //0, 1, 2, 3, ... , 8, 9
/[a-zA-Z]/ //a, b, c, A, B, C, ..., z, Z
/[a-zA-Z0-9]/ //a, b, c, A, B, C, ..., z, Z, 0, ... 9

// 3. Negacja ^

console.log( /[a-zA-Z]/.test("Ala ma kota") ) //true
console.log( /[^a-zA-Z]+$/.test("Ala ma kota") ) // false
console.log( /[^0-9]+$/.test("Ala ma kota") ) //true
console.log( /[^0-9]+[0-9]+$/.test("Ala ma kota 007") ) //true

// 4. Klasy znaków

/*

    Klasa znaków	znaczenie
    \d	każdy znak będący cyfrą. Równoznaczne z [0-9]
    \D	każdy znak nie będący cyfrą. Równoznaczne z [^0-9]
    \w	każdy znak będący literą, cyfrą i znakiem _. Równoznaczne z [a-zA-Z0-9_]
    \W	każdy znak nie będący literą, cyfrą i znakiem _. Równoznaczne z [^a-zA-Z0-9_]
    \s	znak spacji, tabulacji lub nowego wiersza
    \S	każdy znak nie będący spacją, tabulacją lub znakiem nowego wiersza
    \n	znak nowego wiersza
    \t	znak tabulacji
    \uXXXX	oznacza znak o danym kodzie Unicode. Do użycia wymaga odpowiedniej flagi
    .	oznacza dowolny znak nie będący znakiem nowej linii. Żeby oznaczał też nową linię musimy użyć odpowiedniej flagi.

*/

console.log( /\w/.test("ania") ) //true
console.log( /^\w$/.test("Jan Nowak") ) //false
console.log( /\w \w/.test("Ania Nowak") ) //true
console.log( /[\w]{3}/.test("kot") ) //true
console.log( /^[\w]{3}/.test("kot007") ) //true
console.log( /\w{3}$/.test("kot") ) //true
console.log( /\w{3}$/.test("---") ) //false
console.log( /^[\w]$/.test("Ania.007") ) //false
console.log( /^[\w]+.[\d]+/.test("Ania.007") ) //true

console.log( /^.arka/.test("barka pływa") ) //true
console.log( /^.arka$/.test("barka pływa") ) //false

// 5. Znak | oznacza lub

console.log( /p|kara/.test("para") ) //true
console.log( /p|kara/.test("kara") ) //true
console.log( /p|kara/.test("sara") ) //false