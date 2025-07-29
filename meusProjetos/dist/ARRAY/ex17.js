"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Crie um array com 10 números aleatórios entre 0 e 100 e mostre a soma total.*/
exports.numeros = [];
let soma = 0;
for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100) + 1;
    exports.numeros.push(numero);
    soma += exports.numeros[i];
}
console.log(`soma : ${soma}\nArray aleatório : ${exports.numeros} `);
