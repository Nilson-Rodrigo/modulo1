"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.n1 = void 0;
// Peça dois números e mostre a soma, subtração, multiplicação e divisão
exports.n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let soma = exports.n1 + n2;
let subtracao = exports.n1 - n2;
let multiplicacao = exports.n1 * n2;
let mensagem = "Soma = " + soma +
    "\nSubtração = " + subtracao +
    "\nMultiplicação = " + multiplicacao;
if (n2 !== 0) {
    let divisao = exports.n1 / n2;
    mensagem += "\nDivisão = " + divisao;
}
else {
    mensagem += "\nDivisão = Impossível dividir por zero";
}
alert(mensagem);
