"use strict";
//Use reduce para multiplicar todos os elementos de let numeros = [2, 3, 4];.
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [2, 3, 4];
function multiplicar(n1, n2) {
    return n1 * n2;
}
let resultado = exports.numeros.reduce(multiplicar, 1);
console.log(resultado);
