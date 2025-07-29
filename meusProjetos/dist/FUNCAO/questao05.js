"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maior = maior;
/*Crie uma função que receba dois números e retorne o maior entre eles.
1 ponto*/
function maior(n1, n2) {
    if (n1 > n2) {
        return n1 + ' é maior';
    }
    if (n2 > n1) {
        return n2 + ' é maior';
    }
    return 'iguais';
}
console.log(maior(112, 112));
