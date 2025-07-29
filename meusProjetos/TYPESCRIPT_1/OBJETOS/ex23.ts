/*Crie uma classe ProdutoEstoque com os atributos nome, quantidade. Adicione um método repor(quantidade: number) e outro vender(quantidade: number).*/

class ProdutoEstoque{
    nome: string;
    quantidade: number;
    constructor(nome:string, quantidade:number){
        this.nome = nome;
        this.quantidade = quantidade;
    }
   
    public vender(quantidadeVendida: number): string{
    if(quantidadeVendida > this.quantidade){
        return ` Não é possível vender nessa quantidade, produto tem apenas ${this.quantidade}`
    }
    return `Venda concluída com sucesso!`;
    }
     public repor(quantidadeDoProduto: number): string{
        return `Quantidade adicionada do produto : ${quantidadeDoProduto}\n
        --HISTÓRICO DO  PRODUTO--\n
        ${this.nome}\n
        retirado ${this.vender}`;
    }
}