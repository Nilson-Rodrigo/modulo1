/*Crie uma classe Funcionario com atributos nome e salario, e um método aumentarSalario(porcentagem: number)que ajusta o salário.*/

class Funcionario {
    nome: string;
    salario: number;
    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    public ajusteSalarial(porcentagem: number): number {
        return this.salario + this.salario * porcentagem / 100;
    }
}
let funcionarioPromovido = new Funcionario('Nilson', 12000);

console.log(funcionarioPromovido.ajusteSalarial(12));