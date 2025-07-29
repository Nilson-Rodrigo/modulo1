"use strict";
/*Crie um array com 5 valores e exiba-os em formato de lista numerada.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [10, 3, 7, 8, 9];
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${exports.numeros[i]}`);
}
