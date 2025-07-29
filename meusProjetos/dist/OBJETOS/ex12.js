"use strict";
/*Crie uma classe Livro com os atributos titulo, autor e ano. Instancie dois livros e imprima os títulos.*/
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}
let livro1 = new Livro('Pai Rico, pai Pobre', ' Kiyosaki Robert T', 2017);
let livro2 = new Livro('O Senhor dos Anéis', ' J. R. R. Tolkien', 1937);
console.log(`${livro1.titulo}\n${livro2.titulo}`);
