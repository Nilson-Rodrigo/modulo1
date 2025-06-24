//5. Peça dois números inteiros e exiba todos os valores entre eles, inclusive os próprios valores se desejar.

let numero01, numero02 : number; 

numero01= Number(prompt("Digite um número"));
numero02= Number(prompt("Digite outro número"));

if(numero01>numero02){
    while(numero01>=numero02){
        alert(numero02);
        numero02=numero02+1;
    }
} if(numero01<=numero02){
    while(numero02>=numero01){
        alert(numero01);
        numero01=numero01+1;
    }
}