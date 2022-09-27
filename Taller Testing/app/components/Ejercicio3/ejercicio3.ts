let grupoletras1 = ["e", "d", "f"]
let grupoletras2 = ["a", "c", "b"]
let grupoletras3 = ["g", "h", "i"]

let organizarletras1 = grupoletras1.sort();
let organizarletras2 = grupoletras2.sort();
let organizarletras3 = grupoletras3.sort();
let ordenar;

function ejercicio3 (letrass: any) {
    return ordenar = letrass.sort((a:any,b:any) => { if (a < b) {
            return -1
        }else if (a > b){
            return 1
        }else{
            return 0
        }
    })
}
ejercicio3(grupoletras1);
ejercicio3(grupoletras2);
ejercicio3(grupoletras3);

let grupoletras4 = [grupoletras2,grupoletras1,grupoletras3]
console.log(grupoletras4)
module.exports = ejercicio3;