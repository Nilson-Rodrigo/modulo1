"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros1A10 = void 0;
exports.numeros1A10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i;
let soma = 0;
for (i = 0; i < exports.numeros1A10.length; i++) {
    soma = soma + exports.numeros1A10[i];
}
let media = soma / exports.numeros1A10.length;
console.log(media);
