/*Crie um objeto contaBancaria com:
titular (string)

saldo (number)

um método depositar(valor: number) que soma o valor ao saldo

Depois, chame a função depositar duas vezes com valores diferentes e imprima o saldo final.*/
export
class ContaBancaria{
    titular: string;
    saldo: number;
    constructor(titular:string, saldo: number){
        this.titular = titular
        this.saldo = saldo;
    }
    public depositar(valor: number): string{
        this.saldo = this.saldo+valor;
        return `${this.saldo}`;
    }
}

let pessoa1 = new ContaBancaria('Nilson', 2333);
pessoa1.depositar(1333);
pessoa1.depositar(13333);
console.log(pessoa1.saldo);