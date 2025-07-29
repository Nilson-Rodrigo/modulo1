/*Crie uma classe chamada Pessoa com os atributos nome e idade. Instancie um objeto dessa classe e imprima o nome no console.*/


class Pessoa {
    nome : string;
    idade : number;
    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

let p1 = new Pessoa('Nilson',111);
console.log(p1.nome);