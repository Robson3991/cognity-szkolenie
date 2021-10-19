// Math.ceil(liczba) - Zaokrąglenie w górę
Math.ceil(2.01) // 3
Math.ceil(2) // 2

// Math.abs(liczba) Wartość bezwzględna - absolutna
Math.abs(-3) // 3
Math.abs(3) // 3

// Math.floor(liczba) Zaokrąglenie w dół
Math.floor(2.1) // 2
Math.floor(2.9) // 2

// Math.round(liczba) Zaokrąglenie do najbliższej liczby załkowitej
Math.round(2.49) // 2
Math.round(2.5) // 3

// Losowa liczba z przedziału od 0 do 1
Math.random()

// Maksymalna liczba z przedziału
Math.max(1, 2, 3, 4) // 4

// Minimalna liczba z przedziału
Math.min(1, 2, 3, 4) // 1

// Losowa liczba z przedziału

const min = 3;
const max = 7;

const result = Math.floor(Math.random() * (max-min+1) + min);