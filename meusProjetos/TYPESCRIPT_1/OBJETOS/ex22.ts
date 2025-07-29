/*Crie uma classe Conta com método transferir(valor: number, destino: Conta) que transfere saldo de uma conta para outra.*/

class Conta{
    titular: string;
    numeroDaConta: string;
    saldo: number;
    constructor(titular: string, numeroDaConta: string, saldo: number){
        this.titular = titular;
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }
    public transferir(valor: number, numeroDaConta = this.numeroDaConta): string{
        if(valor > this.saldo){
            return `Não foi possível fazer a transferência`;
        }
        return `Transferência feita com sucesso no valor de R$${valor}\n
        Para ${numeroDaConta}\n
        Seu saldo atual é de ${this.saldo - valor}`;
    }
}
let pessoa1 = new Conta('Wesley', '123-455567',1500);
let pessoa2 = new Conta('Nilson', '557-345999',100);



console.log(pessoa2.transferir(50, pessoa1.numeroDaConta));