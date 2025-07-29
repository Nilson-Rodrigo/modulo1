/*Crie uma classe Musica com atributos titulo, artista e duracao. Adicione um método tocar() que imprime “Tocando TITULO de ARTISTA”.*/

class Musica{
  titulo: string;
  artista: string;
  duracao: string;
  constructor(titulo:string,artista:string,duracao:string){
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
  }
      public statusDaMusica(): string{
        return `tocando ${this.titulo} do artista ${this.artista}`;
      }
}
let novaMusica = new Musica('for the first time','macdemarco','3:03');
console.log(novaMusica.statusDaMusica());