// Grupy tworzymy poprzez zastosowanie nawiasów okrągłych

const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
console.log( reg.test("2020-10-05") ) //true

const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
console.log( "1980-10-05".replace(reg, "Mamy rok $1 miesiąc $2 dzień $3") ); //"Mamy rok 1980 miesiąc 10 dzień 05"

