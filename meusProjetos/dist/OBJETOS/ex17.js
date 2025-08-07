"use strict";
/*Crie uma classe Aluno com os atributos nome e notas (array de números). Adicione um método media() que retorna a média das notas.*/
//criando a classe
class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    // o método média vai retornar um número
    media() {
        let somarNotas = 0;
        let mediaDasNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            somarNotas = somarNotas + this.notas[i];
        }
        return mediaDasNotas = somarNotas / this.notas.length;
    }
}
let notaAluno1 = new Aluno('nilson', [10, 9, 9.5]);
console.log(notaAluno1.media());
