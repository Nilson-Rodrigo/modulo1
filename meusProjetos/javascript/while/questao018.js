"use strict";
/*18. A sequência de Fibonacci começa com 0 e 1. Cada número seguinte é a soma dos dois anteriores. Exemplo: 0, 1, 1, 2, 3, 5, 8...
 Mostre a sequência até um número limite informado */
let numeroLimite, primeiroNumero, segundoNumero, somarNumeros;
somarNumeros = 0;
primeiroNumero = 0;
segundoNumero = 1;
numeroLimite = Number(prompt(" Digite um limite para a sequência de fibonacci"));
alert(primeiroNumero);
alert(segundoNumero);
somarNumeros = primeiroNumero + segundoNumero;
while (somarNumeros <= numeroLimite) {
    alert(somarNumeros);
    primeiroNumero = segundoNumero;
    segundoNumero = somarNumeros;
    somarNumeros = primeiroNumero + segundoNumero;
}
