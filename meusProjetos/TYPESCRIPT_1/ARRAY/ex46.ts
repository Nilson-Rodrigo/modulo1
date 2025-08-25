//Use reduce para multiplicar todos os elementos de let numeros = [2, 3, 4];.

export
let numeros = [2, 3, 4];
function multiplicar(n1: number, n2:number){
    return n1 * n2;
}

let resultado = numeros.reduce(multiplicar,1);
console.log(resultado);