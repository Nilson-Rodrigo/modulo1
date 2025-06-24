"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = fatorial;
/*Crie uma função que calcule o fatorial de um número.
1 ponto*/
function fatorial(n1) {
    let i;
    let r = 1;
    for (i = 1; i <= n1; i++) {
        r = r * i;
    }
    return r;
}
console.log(fatorial(3));
