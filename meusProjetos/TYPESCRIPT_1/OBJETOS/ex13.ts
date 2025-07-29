/*Adicione um construtor à classe Pessoa para inicializar nome e idade. Instancie dois objetos e imprima a idade de ambos.*/

export
class Pessoa {
    nome : string;
    idade : number;
    constructor(nome:string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}
let p1 = new Pessoa('Douglas',33);
let p2 = new Pessoa('Nilson',100);
console.log(`${p1.idade} \n ${p2.idade}`);