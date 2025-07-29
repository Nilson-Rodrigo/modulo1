"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = numeros;
/*Faça uma função que receba um array com 5 números e retorne um novo array
com os valores invertidos.*/
function numeros(num = []) {
    for (let i = 0; i < 5; i++) {
        let p = Number(prompt('Digite um número'));
        num.unshift(p);
    }
    return num.join(", ");
}
console.log(numeros([]));
