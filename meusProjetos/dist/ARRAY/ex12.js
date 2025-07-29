"use strict";
/*Peça 5 nomes e mostre apenas os que têm mais de 5 letras.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
exports.nomes = [];
let nomesMaiorQue5 = [];
for (let i = 0; i < 4; i++) {
    let pNome = String(prompt('Digite um nome'));
    exports.nomes.push(pNome);
    if (exports.nomes[i].length > 5) {
        nomesMaiorQue5.push(exports.nomes[i]);
    }
}
console.log(nomesMaiorQue5);
