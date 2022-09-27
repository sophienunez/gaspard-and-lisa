const ejercicio5 = require('./ejercicio5');

test('la solucion es igual a pizza, perro, nosexd, p1cha', () => {
    let palabras1 = ["pizza", "perro", "hamburguesa", "nosexd", "p1cha"];
    let palabras2 = ["onvre", "pizza", "perro", "carne", "nosexd", "p1cha"];
    expect (ejercicio5(palabras1, palabras2)).toEqual(['pizza', 'perro', 'nosexd', 'p1cha']);
});