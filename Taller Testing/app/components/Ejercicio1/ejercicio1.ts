var letters = ["h", "a", "c"]; 
 var numbers = ["7", "4", "17", "10", "48"];
 
 function ejercicio1(letters:any, numbers: any) {
    let solucion = letters.concat(numbers);
    return solucion    
 }
 console.log("Solución Ejercicio 1: " + ejercicio1(letters, numbers));
 module.exports = ejercicio1;