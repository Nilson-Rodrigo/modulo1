"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
/*Crie um objeto contaBancaria com:
titular (string)

saldo (number)

um método depositar(valor: number) que soma o valor ao saldo

Depois, chame a função depositar duas vezes com valores diferentes e imprima o saldo final.*/
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
        return `${this.saldo}`;
    }
}
exports.ContaBancaria = ContaBancaria;
let pessoa1 = new ContaBancaria('Nilson', 2333);
pessoa1.depositar(1333);
pessoa1.depositar(13333);
console.log(pessoa1.saldo);
