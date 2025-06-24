//8. Solicite números ao usuário até que a soma total ultrapasse 100. Depois mostre a soma e quantos números foram digitados.
let numeroAteUltrapassar100, guardarNumeros, contarNumeros : number;
numeroAteUltrapassar100 = 0;
guardarNumeros = 0;
contarNumeros = 0;


while(guardarNumeros<102){
   numeroAteUltrapassar100= Number(prompt("Digite um número"));
    guardarNumeros = numeroAteUltrapassar100+guardarNumeros;
    contarNumeros = contarNumeros+1;
}
alert("Soma: "+guardarNumeros+ " Quantidades de numeros: "+contarNumeros);
