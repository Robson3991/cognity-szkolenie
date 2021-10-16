const ob = {
    name : "Piotr",
    surname : "Nowak"
}

// 1. JSON.stringify - zamienia dany obiekt na tekstowy zapis w formacie JSON

const obStr = JSON.stringify(ob); 
console.log(obStr); //"{"name":"Piotr","subname":"Nowak"}"

// 2. JSON.parse - zamienia zakodowany wcześniej tekst na obiekt JavaScript

console.log( JSON.parse(obStr) ); //nasz wcześniejszy obiekt