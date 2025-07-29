"use strict";
/*Solicite 10 números e mostre apenas os múltiplos de 3.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [];
for (let i = 0; i < 10; i++) {
    let num = Number(prompt('Digite um número'));
    exports.numeros.push(num);
}
let multiplo = exports.numeros.filter(num => num % 3 == 0);
console.log(multiplo);
