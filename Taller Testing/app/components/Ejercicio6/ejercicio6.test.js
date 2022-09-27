const ejercicio6 = require('./ejercicio6');

test('la solucion es igual a 2, 6, 7, a, b, q', () => {
    let letras = ["b", "6", "a", "q", "7", "2"];
    expect (ejercicio6(letras)).toEqual(["2", "6", "7", "a", "b", "q"]);
});