/*Crie uma classe Produto com os atributos nome e preco. Depois, crie um objeto e altere o valor do atributo preco.*/

class Produto {
    nome : string;
    preco : number;

    constructor(nome:string,preco:number){
        this.nome = nome;
        this.preco = preco;
    }
}

let produto1 = new Produto('cuscuz', 0.50);

produto1.preco = 6.99;

console.log(produto1);