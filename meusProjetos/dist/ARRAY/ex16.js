"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Peça 5 números e mostre o array com os valores multiplicados por 2.*/
exports.numeros = [];
for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Digite um número'));
    exports.numeros.push(num * 2);
}
console.log(exports.numeros);
