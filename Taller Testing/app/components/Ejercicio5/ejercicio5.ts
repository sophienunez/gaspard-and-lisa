let palabras1 = ["pizza", "perro", "hamburguesa", "nosexd", "p1cha"];
let palabras2 = ["onvre", "pizza", "perro", "carne", "nosexd", "p1cha"];

function ejercicio5(a:any, b:any) {
  let solucion = [];
  for ( let i = 0; i < a.length; i++ ) {
      for ( let e = 0; e < b.length; e++ ) {
          if ( a[i] === b[e] ) solucion.push( a[i] );
      }
  }
  return solucion;
}

console.log(ejercicio5(palabras1, palabras2));
module.exports = ejercicio5;