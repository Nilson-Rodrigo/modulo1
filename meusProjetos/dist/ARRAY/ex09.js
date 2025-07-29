"use strict";
/*Peça ao usuário 3 números e exiba o dobro de cada valor.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [];
for (let i = 0; i < 3; i++) {
    let num = Number(prompt('Digite um número'));
    exports.numeros.push(num);
}
let dobro = exports.numeros.map(n => n * 2);
console.log(dobro);
