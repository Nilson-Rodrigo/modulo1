//10. Peça um número inteiro e conte quantos divisores ele possui 

let numero001, contagem, contaNumerosDivisiveis: number;
numero001;
contagem=0;
contaNumerosDivisiveis=0;
numero001=Number(prompt("Digite um  número"));
    while(contagem!=numero001){
        contagem=contagem+1;
        if(numero001%contagem==0){
            contaNumerosDivisiveis=contaNumerosDivisiveis+1
        }
    }

    alert( "A quantidade de divisores desse número é "+contaNumerosDivisiveis);