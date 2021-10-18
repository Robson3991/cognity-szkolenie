// Operatory 

 // 1. przypisania

let cost = 10

let sum = 10 + 1;
let sum2 = sum += 10;
let minus = sum -= 10;
let mnozenie = sum *= 5;
let dzielenie = sum /= 5;
let modulo = sum %= 5 /// 1

cost++ // 10 -> 11
++cost // 11

// 2. porównania true / false

10 == 20 // sprawdza wartość
10 === 10 // sprawdza wartość + typ

10 == '10' // true
10 === '10' // false


10 != '12' // wartość - true
10 !== '10' // wartość + typ - true

10 < 10 // false
10 > 20 // false

10 <= 10 // true
10 >= 10 // true

// 3. Logiczne

true && true // true // 10 && false -> false // and
true || false // true // false || 10 -> true // or

// xor 

true ^ true // false;
true ^ false // true

// negacja

!true // false
!false // true

// 4. operatory logiczne w równaniach

const a = 100 && 200; // a = 200; 
const b = 100 || 200;  // b = 100


