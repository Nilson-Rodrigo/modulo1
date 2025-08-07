/*1. Crie um objeto chamado aluno com as seguintes propriedades:
nome (string)

idade (number)

curso (string)

Depois, imprima no console o nome do aluno.*/
export
class Aluno{
    nome: string;
    idade: number;
    curso: string;

    constructor(nome: string, idade:number,curso:string){
       this.nome = nome;
       this.idade = idade;
       this.curso = curso; 
    }
}

let aluno1 = new Aluno('Nilson',21, 'Análise e Desenvolvimento de Sistemas')