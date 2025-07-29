"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Armazene 7 números inteiros e mostre os que são negativos.*/
exports.numeros = [1, 3, 5, 6, -9, -8, -11];
let negat = exports.numeros.filter(num => num < 0);
console.log(negat);
