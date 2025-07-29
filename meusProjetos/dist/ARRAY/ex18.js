"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
/*Peça 4 nomes e mostre o primeiro e o último digitados.*/
exports.nomes = [];
for (let i = 0; i < 4; i++) {
    let nome = String(prompt('Digite um nome'));
    exports.nomes.push(nome);
}
console.log(exports.nomes[0]);
console.log(exports.nomes[3]);
