"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notas = void 0;
/*Crie um array com 6 notas e calcule quantas estão acima de 7.*/
exports.notas = [];
let incremento = 0;
for (let i = 0; i < 6; i++) {
    let adcNota = Number(prompt('digite uma nota'));
    exports.notas.push(adcNota);
    if (adcNota > 7) {
        incremento++;
    }
}
console.log('notas acima de 7 = ' + incremento);
