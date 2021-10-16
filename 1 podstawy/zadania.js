// 1. Funkcja do sprawdzania palindromu 

// rozwiązanie: 

function isPalidrom(text) {
    return text.toLowerCase().split('').reverse().join('') === text.toLowerCase();
}

console.log(isPalidrom('ikar łapał raki'));


// 2. Napisać funkcję do szyfrowania słowa. Każda litera zostanie zamieniona na kolejną z alfabetu

const alphabet = 'aąbcćdeęfghijlklłmnńoópqrsśtuvwxyzżź';

function encrypt(str) {
    return str.split('').map(letter => {
        const indexInAlphabet = alphabet.indexOf(letter.toLowerCase());
        return alphabet[indexInAlphabet + 1];
    }).join('');
};