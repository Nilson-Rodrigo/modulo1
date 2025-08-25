/*Calcule a soma dos números em let valores = [1, 2, 3, 4, 5]; usando reduce.*/ 
export
let valores = [1, 2, 3, 4, 5];

function somar(i: number, proximoValor: number){
    return i + proximoValor;
}

let total = valores.reduce(somar,0);
console.log(total);