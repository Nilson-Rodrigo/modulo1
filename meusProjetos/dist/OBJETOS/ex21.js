"use strict";
/*Crie uma classe Musica com atributos titulo, artista e duracao. Adicione um método tocar() que imprime “Tocando TITULO de ARTISTA”.*/
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
    statusDaMusica() {
        return `tocando ${this.titulo} do artista ${this.artista}`;
    }
}
let novaMusica = new Musica('for the first time', 'macdemarco', '3:03');
console.log(novaMusica.statusDaMusica());
