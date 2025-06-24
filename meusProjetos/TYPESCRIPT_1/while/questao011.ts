//11. Um número primo é aquele que tem exatamente dois divisores: 1 e ele mesmo.Faça um programa que verifique se o número digitado é primo.

let numeroSePrimo, contando, primo: number;
numeroSePrimo=1;
contando=0;
primo=0;
numeroSePrimo=Number(prompt("Digite um  número"));
    while(contando!=numeroSePrimo){
       contando=contando+1;
        if(numeroSePrimo%contando==0){
            primo=primo+1
        } 
    }
    if(primo==2){
        alert(" O numero digitado é primo")
    } else{
        alert(" O numero digitado não é primo");
    }