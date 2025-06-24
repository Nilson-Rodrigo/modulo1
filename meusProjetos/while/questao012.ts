//12. Peça 10 números ao usuário. No final, informe quantos deles são pares

let numeroSePar, contarAte10, contarNumeroPar: number;

contarAte10=0;
contarNumeroPar=0;

while(contarAte10<10){
    contarAte10=contarAte10+1;
    numeroSePar=Number(prompt("Digite um número "));
    if (numeroSePar%2==0){
        contarNumeroPar=contarNumeroPar+1;
    }
}

alert(" Existe "+contarNumeroPar + " numeros pares");

