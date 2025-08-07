"use strict";
/*Crie uma classe ProdutoEstoque com os atributos nome, quantidade. Adicione um método repor(quantidade: number) e outro vender(quantidade: number).*/
class ProdutoEstoque {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            return ` Não é possível vender nessa quantidade, produto tem apenas ${this.quantidade}`;
        }
        return `Venda concluída com sucesso!`;
    }
    repor(quantidadeDoProduto) {
        return `Quantidade adicionada do produto : ${quantidadeDoProduto}\n
        --HISTÓRICO DO  PRODUTO--\n
        ${this.nome}\n
        retirado ${this.vender}`;
    }
}
