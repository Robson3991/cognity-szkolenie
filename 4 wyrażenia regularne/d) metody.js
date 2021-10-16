// Metody

// 1. Match - wyszukuje i zwraca dany fragment z stringa

const text = "Numer1, Numer2, Numer3, NumerB, Numer5, NumerD";

const reg2 = /Numer[1-4A-C]/g;
console.log(text.match(reg2)); //[Numer1, Numer2, Numer3, NumerB]

// 2. Split - podział tekstu na części

const txt = "Czołg o numerze 102 rusza do akcji i strzela 10 razy";
console.log(txt.split(/[0-9]+/)) //["Czołg o numerze ", " rusza do akcji i strzela ", " razy"]

// 3. Replace - podmiana tekstu na inny

const text = 'mały kotek, duży kot, a co to za kot?';

text.replace(/kot/g, 'pies') // 'mały piesek, duży pies, a co to za pies?'

// 4. Replace w grupach

const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const text = "2020-10-05";

console.log( text.replace(reg, "Mamy rok $3 miesiąc $2 dzień $1") ); //"Mamy rok 2020 miesiąc 10 dzień 05"

// 5. Exec

const txt = "2020-10-20";
const reg = /\d+/
console.log(reg.exec(txt)); //"2020"

// dodanie flagi g powoduje zapamiętanie indeksu ostatnio zwróconego elementu.
// Każde kolejne wywołanie funkcji exec zwróci następny możliwy fragment

const txt = "2020-10-20";
const reg = /\d+/g
console.log(reg.exec(txt)); //"2020"
console.log(reg.lastIndex); //4

console.log(reg.exec(txt)); //"10"
console.log(reg.lastIndex); //7

console.log(reg.exec(txt)); //"20"
console.log(reg.lastIndex); //10
