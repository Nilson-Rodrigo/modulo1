"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numero = void 0;
// Peça um número e diga se ele é par ou impar 
exports.numero = Number(prompt("Digite um número:"));
if (exports.numero % 2 === 0) {
    alert(exports.numero + " é par");
}
else {
    alert(exports.numero + " é ímpar");
}
