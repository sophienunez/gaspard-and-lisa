const ejercicio1 = require('./ejercicio1');

test('la suma de letters y numbers es igual a h,a,c,7,4,17,10,48', () => {
    var letters = ["h", "a", "c"]; 
    var numbers = ["7", "4", "17", "10", "48"];
    expect (ejercicio1(letters, numbers)).toEqual(["h", "a", "c","7", "4", "17", "10", "48"]);
});