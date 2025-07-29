"use strict";
/*Armazene 5 nomes em um array. Peça um nome ao usuário e verifique se ele está na lista.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
exports.nomes = ['iallen', 'gabio', 'nilson', 'vaidarseucu', 'douglas'];
function verifica(nome) {
    for (let i = 0; i < exports.nomes.length; i++) {
        if (nome == exports.nomes[i]) {
            return 'nome já está na lista';
        }
    }
    return 'nome não está na lista';
}
console.log(verifica(prompt('digite um nome')));
