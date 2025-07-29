"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabuada = tabuada;
/*Crie uma função que receba um número e retorne a sua tabuada de 1 a 10 como uma string.
1 ponto*/
function tabuada(n1) {
    let i, multiplica;
    for (let i = 1; i <= 10; i++) {
        multiplica = n1 * i;
        console.log(`${n1} X ${i} = ${multiplica}`);
    }
    return 'resultado\n' + tabuada;
}
tabuada(15);
