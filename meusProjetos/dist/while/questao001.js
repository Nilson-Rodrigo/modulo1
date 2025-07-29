"use strict";
//1. Faça um programa que peça ao usuário para digitar um número inteiro positivo. O programa deve exibir todos os números de 1 até esse número usando o comando while.
Object.defineProperty(exports, "__esModule", { value: true });
exports.numero = void 0;
let contarNumero = 0;
exports.numero = Number(prompt("Digite um número positivo"));
while (contarNumero < exports.numero) {
    contarNumero = contarNumero + 1;
    alert(contarNumero);
}
