// 1. Napisać funkcję logującą miesiące co jedną sekundę

function interval() {
    const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    let counter = 0;

    const setCounter = setInterval(function() {
           
        console.log(months[counter]);

        if (++counter == months.length) clearInterval(setCounter);
    }, 1000)
    
};