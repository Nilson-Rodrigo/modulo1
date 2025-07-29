"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Solicite 4 números e mostre a soma de todos os elementos do array.*/
exports.numeros = [];
let soma = 0;
for (let i = 0; i < 4; i++) {
    let nota = Number(prompt('digite a nota'));
    exports.numeros.push(nota);
    soma = soma + exports.numeros[i];
}
console.log(soma);
