// 1. Tworzenie

const obj = {
    name: 'Robert',
    email: 'rober@cos.pl'
}

// 2. Przypisanie wartości do istniejącego obiektu

obj.surname = 'Grembowicz' // klucz wartość
obj[document.query]
obj['str'] = 'wartosść'

// 3. Odczywanie wartości z obiektu

const name = obj.name;
const name2 = obj['name']; // ten sposób pozwala na pobieranie wartości poprzez podanie zmiennej w nawiasie kwadratowym