const ejercicio3 = require('./ejercicio3');

test('la solucion es igual a [ a, b, c ], [ d, e, f ], [ g, h, i ] ', () => {

let grupoletras1 = ["e", "d", "f"];
let grupoletras2 = ["a", "c", "b"];
let grupoletras3 = ["g", "h", "i"];
let grupoletras4 = [grupoletras2,grupoletras1,grupoletras3];


    expect (grupoletras4).toEqual([[ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]);
});