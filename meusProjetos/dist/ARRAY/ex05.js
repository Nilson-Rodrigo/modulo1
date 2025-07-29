"use strict";
/*Solicite 10 números e conte quantos são pares e quantos são ímpares.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [];
let par = 0;
let impares = 0;
for (let i = 0; i < 10; i++) {
    let adiciona = Number(prompt('digite um número'));
    exports.numeros.push(adiciona);
    if (exports.numeros[i] % 2 == 0 && exports.numeros[i] != 0) {
        par++;
    }
    if (exports.numeros[i] % 2 != 0) {
        impares++;
    }
}
console.log(`[TOTAL = PARES: ${par} | IMPARES: ${impares}]`);
