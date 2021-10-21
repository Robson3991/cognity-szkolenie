// Pobieranue danych z serwera za pomocą metody GET

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response); // ten wykon zostanie zwrócony jeśli otrzymamy poprawnaą odpowiedź z serwera
})
.catch(err => {
	console.error(err); // jeśli serwer zwróci błąd, to zostanie wykonany ten kod
});