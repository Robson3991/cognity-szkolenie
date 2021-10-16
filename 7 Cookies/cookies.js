// 1. Funkcja do pobierania konkretnego ciasteczka

function getCookie(name) {
    return document.cookie.split('; ' + name + '=').pop().split('; ').shift()
}

// 2. Funkcja do usuwania ciasteczka

function deleteCookie(name) {
    document.cookie = name + "=; max-age=-1;";
}

// 3. Funkcja do tworzenia ciasteczka

function setCookie(name, val, days, path, domain, secure) {
    let cookieText = name + "=" + val;

    if (typeof days === "number") {
        const data = new Date();
        data.setTime(data.getTime() + (days * 24*60*60*1000));
        cookieText += "; expires=" + data.toUTCString();
    }

    if (path) {
        cookieText += "; path=" + path;
    }
    if (domain) {
        cookieText += "; domain=" + domain;
    }
    if (secure) {
        cookieText += "; secure";
    }

    document.cookie = cookieText;
}

