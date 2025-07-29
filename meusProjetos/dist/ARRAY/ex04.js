"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
/*Solicite 5 números e informe o maior e o menor valor.*/
exports.numeros = [];
let maior = 0;
let menor = 0;
for (let i = 0; i < 5; i++) {
    let adiciona = Number(prompt('digite um número'));
    exports.numeros.push(adiciona);
    if (i == 0) {
        maior = adiciona;
        menor = adiciona;
    }
    else {
        if (adiciona > maior) {
            maior = adiciona;
        }
        if (adiciona < menor) {
            menor = adiciona;
        }
    }
}
alert('menor =' + menor + '\nmaior = ' + maior);
