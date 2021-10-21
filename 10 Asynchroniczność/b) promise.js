/*
    Promis to obietnica, która zostanie asynchronicznie wykonana (rozwiązana) po spełneniu wytycznych wskazanych w jej ciele
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise1.then((value) => {
    console.log(value); // foo
});

console.log(promise1); // [object promise];

// Cały powyższy kod wpierw wykona console log promise1, a potem dopiero zwróci console.log(value) 

