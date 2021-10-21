// 1. setTimeout - kod wykonywany jednorazowo po pewnym czasie

function timeout() {
    console.log('set timeout');
}

const timer = setTimeout(timeout, 1000) // czas liczony w milisekundach. Funkcja odpali się po 1 sekundzie


// 2. Clear timeout - funkcja jako parametr przyjmuje zmienną pod którą został podstawiony timeout

clearTimeout(timer); // funkcja timeout w ogóle się nie wykona, bo od razu została przerwana

// 3. Parametry funkcji

function consolelog(month, number) {
    console.log(month + ' - ' + number);
}

setTimeout(consolelog, 2000, 'Luty', 2);

// 4. setInterval - kod wykonywany cyklicznie co określony czas

const interval = setInterval(function() {
    console.log("console.log co jedną sekundę");
}, 1000);

// 5. clearInterval - zatrzymywanie interwału

clearInterval(interval);
