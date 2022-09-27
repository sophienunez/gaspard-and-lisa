const ejercicio2 = require('./ejercicio2');

test('la solucion es igual a [ 2, 4, 6 ], [ 5, 3, 7 ]', () => {
    let numeros = [2,4,6,5,3,7];
    expect (ejercicio2).toEqual([[ 2, 4, 6 ], [ 5, 3, 7 ] ]);
});