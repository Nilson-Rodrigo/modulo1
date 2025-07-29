"use strict";
//13. Peça dois números e calcule a média de todos os valores entre eles (inclusive os limites).
let numeroInicial, numeroFinal, mediaDosNumeros, quantidadeDeNumeros, somaDosNumeros;
quantidadeDeNumeros = 0;
somaDosNumeros = 0;
numeroInicial = Number(prompt("Digite um número"));
numeroFinal = Number(prompt("Digite outro número"));
if (numeroFinal > numeroInicial) {
    while (numeroFinal >= numeroInicial) {
        somaDosNumeros = numeroInicial + somaDosNumeros;
        numeroInicial = numeroInicial + 1;
        quantidadeDeNumeros = quantidadeDeNumeros + 1;
    }
}
else if (numeroFinal < numeroInicial) {
    while (numeroFinal <= numeroInicial) {
        somaDosNumeros = numeroInicial + somaDosNumeros;
        numeroInicial = numeroInicial - 1;
        quantidadeDeNumeros = quantidadeDeNumeros + 1;
    }
}
mediaDosNumeros = somaDosNumeros / quantidadeDeNumeros;
alert(" A media dos intervalos entre os números digitados incluindo eles é " + mediaDosNumeros);
