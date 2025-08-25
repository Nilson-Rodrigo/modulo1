"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
/*Crie um objeto turma com as seguintes propriedades:
nome (string)

alunos (array de strings com nomes de alunos)

Depois, imprima a quantidade de alunos e o nome do primeiro e último aluno da lista.*/
class Turma {
    constructor(nome, alunos) {
        this.nome = nome;
        this.alunos = alunos;
    }
}
exports.Turma = Turma;
let turma = new Turma('9 ano b', ['elisa', 'nilson', 'silvia', 'carlos', 'brenda', 'francisco', 'denis', 'sousa']);
console.log(`QUANTIDADE DE ALUNOS: ${turma.alunos.length} \n
    PRIMEIRO ALUNO: ${turma.alunos[0]}
    ÚLTIMO ALUNO: ${turma.alunos[turma.alunos.length - 1]}`);
console.log(turma.alunos);
