/*
    wejść na allegro, wybrać kategorię i dodać jakieś filtry. 
    Następnie pobrać url i zamienić wszystkie parametry na obiekt
*/

function getParams() {
    const url = window.location.search;
    const obj = {}

    url.substring(1).split('&').map(function(item) {
        const arr = item.split('=');
        obj[arr[0]] = arr[1];
    });

    return obj;
}