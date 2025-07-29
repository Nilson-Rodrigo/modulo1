"use strict";
/*Adicione um construtor à classe Pessoa para inicializar nome e idade. Instancie dois objetos e imprima a idade de ambos.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.Pessoa = Pessoa;
let p1 = new Pessoa('Douglas', 33);
let p2 = new Pessoa('Nilson', 100);
console.log(`${p1.idade} \n ${p2.idade}`);
