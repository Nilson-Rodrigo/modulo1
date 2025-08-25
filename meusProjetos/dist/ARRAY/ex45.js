"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valores = void 0;
/*Calcule a soma dos números em let valores = [1, 2, 3, 4, 5]; usando reduce.*/
exports.valores = [1, 2, 3, 4, 5];
function somar(i, proximoValor) {
    return i + proximoValor;
}
let total = exports.valores.reduce(somar, 0);
console.log(total);
