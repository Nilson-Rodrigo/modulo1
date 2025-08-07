/* Crie um objeto produto com as propriedades:
nome (string)

preco (number)

disponivel (boolean)

Depois, imprima no console uma frase como:
"O produto NOME custa PREÇO reais e está DISPONÍVEL."*/

export
class Produto {
    nome: string;
    preco: number;
    disponível: boolean;
    constructor(nome: string, preco:number, disponível: boolean){
        this.nome = nome;
        this.preco = preco;
        this.disponível = disponível;
    }
    
}