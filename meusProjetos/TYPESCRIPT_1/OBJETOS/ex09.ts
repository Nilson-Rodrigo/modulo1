/*Crie um objeto turma com as seguintes propriedades:
nome (string)

alunos (array de strings com nomes de alunos)

Depois, imprima a quantidade de alunos e o nome do primeiro e último aluno da lista.*/
export

class Turma{
    nome: string;
    alunos: string[];
    constructor(nome:string, alunos: string[]){
        this.nome = nome;
        this.alunos = alunos;
    }
}

let turma = new Turma('9 ano b',['elisa','nilson', 'silvia', 'carlos','brenda','francisco','denis','sousa']);
console.log(`QUANTIDADE DE ALUNOS: ${turma.alunos.length} \n
    PRIMEIRO ALUNO: ${turma.alunos[0]}
    ÚLTIMO ALUNO: ${turma.alunos[turma.alunos.length-1]}`);
    console.log(turma.alunos)