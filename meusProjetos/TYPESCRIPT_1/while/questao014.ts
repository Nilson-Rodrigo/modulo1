//14. Peça um número inteiro positivo e mostre a soma de todos os números de 1 até esse número.

let num= Number(prompt("digite um número"));
let cont: number = 0;
let soma=0;

while(cont<num){
cont=cont+1;
soma = soma+cont;
}
alert("A soma dos números 1 até "+num + " é "+ soma);