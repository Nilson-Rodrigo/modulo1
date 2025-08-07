"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
/*1. Crie um objeto chamado aluno com as seguintes propriedades:
nome (string)

idade (number)

curso (string)

Depois, imprima no console o nome do aluno.*/
class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
}
exports.Aluno = Aluno;
let aluno1 = new Aluno('Nilson', 21, 'Análise e Desenvolvimento de Sistemas');
