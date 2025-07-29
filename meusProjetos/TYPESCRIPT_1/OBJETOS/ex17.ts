/*Crie uma classe Aluno com os atributos nome e notas (array de números). Adicione um método media() que retorna a média das notas.*/

//criando a classe
class Aluno {
    nome: string;
    notas: Array<number>;
    constructor(nome: string, notas: Array<number>) {
        this.nome = nome;
        this.notas = notas;
    }
    // o método média vai retornar um número
    public media(): number {
        let somarNotas: number = 0;
        let mediaDasNotas: number = 0;
        for (let i = 0; i < this.notas.length; i++) {

            somarNotas = somarNotas + this.notas[i];

        }
        return mediaDasNotas = somarNotas/this.notas.length;
    }
}

let notaAluno1 = new Aluno('nilson', [10, 9, 9.5]);
console.log(notaAluno1.media());