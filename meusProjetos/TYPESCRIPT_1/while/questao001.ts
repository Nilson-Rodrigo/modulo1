//1. Faça um programa que peça ao usuário para digitar um número inteiro positivo. O programa deve exibir todos os números de 1 até esse número usando o comando while.

export 
let numero : number;
let contarNumero: number = 0;
numero=Number(prompt("Digite um número positivo"));
while(contarNumero<numero){
   contarNumero=contarNumero+1
    alert(contarNumero);
}