"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = void 0;
/*Crie uma função que receba um array de números e retorne a média.*/
exports.soma = 0;
function media(a = []) {
    for (let i = 0; i < a.length; i++) {
        exports.soma = exports.soma + a[i];
    }
    return ` Média = ${exports.soma / a.length}`;
}
console.log(media([0, 2, 4]));
