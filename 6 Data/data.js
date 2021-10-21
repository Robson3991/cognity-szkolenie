const now = new Date();

console.log( now.getDate() ) // wraca dzień miesiąca
console.log( now.getFullYear() ) // zwraca rok
console.log( now.getMonth() )
console.log( now.getDay() ) // zwraca dzień tygodnia (liczone od 0)
console.log( now.getHours() ) //
console.log( now.getMinutes() )
console.log( now.getSeconds() )
console.log( now.getMilliseconds() )
console.log( now.getTime() )


now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() // 2021-19-10

/* 
    getTime  -  liczba milisekund, która upłynęła od od godziny 00:00 1 stycznia 1970 roku.
                Tak zwany czas unixowy
*/

// 2. Porównywanie dat

const second = 1000;
const minute = 60;
const hour = 60;
const day = 24

const milisecondDay = second * minute * hour * day;

// 3. toLocaleDateString

// 4. Date.now()