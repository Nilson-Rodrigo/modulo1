"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Solicite 6 números e mostre quantos são maiores que a média.*/
exports.numeros = [];
let soma = 0;
for (let i = 0; i < 6; i++) {
    let solitacao = Number(prompt('Digite um número'));
    exports.numeros.push(solitacao);
    soma += exports.numeros[i];
}
let media = soma / exports.numeros.length;
let maiorQueMedia = exports.numeros.filter(num => num > media);
console.log(maiorQueMedia);
