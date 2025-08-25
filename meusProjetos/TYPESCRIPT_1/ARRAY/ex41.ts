/*Aumente todos os valores do array let pontos = [1, 2, 3]; em 10 usando map.*/

let pontos = [1, 2, 3];

function somar(n: number): number{
    return n + 10;
}

let result = pontos.map(somar);
console.log(result);

