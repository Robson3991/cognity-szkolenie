// 1. Ustawianie sotrage

// Przypisywanie do sessionStorage wygląda analogicznie
// zmienia się tylko zapis z local na session w poniższych przykładach

localStorage.setItem("myElement", [1,2,3]); //zalecany sposób
localStorage.myElement = "Przykładowa wartość";
localStorage["myElement"] = "Przykładowa wartość"

// 2. Pobieranie elementy z local storage

const element = localStorage.getItem("myElement"); //zalecany sposób
const element = localStorage.myElement;
const element = localStorage["myElement"];

//tworzymy element tylko wtedy gdy go jeszcze nie ma
if (localStorage.getItem("myElement") === null) {
    localStorage.setItem("myElement")
}

// 3. Dodawanie obiektu do local storage

const ob = {
    one: 1,
    two: 2,
    three: 3
};

localStorage.setItem("obj", JSON.stringify(ob));

const retrievedObject = JSON.parse(localStorage.getItem("obj"));
console.log(retrievedObject);

// 4. usuwanie elementu

localStorage.removeItem("element");

// 5. Czyszczenie całego localstorage

localStorage.clear()
