"use strict";
/* Crie um objeto produto com as propriedades:
nome (string)

preco (number)

disponivel (boolean)

Depois, imprima no console uma frase como:
"O produto NOME custa PREÇO reais e está DISPONÍVEL."*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco, disponível) {
        this.nome = nome;
        this.preco = preco;
        this.disponível = disponível;
    }
}
exports.Produto = Produto;
