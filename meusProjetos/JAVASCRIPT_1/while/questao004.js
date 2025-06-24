"use strict";
//4. O fatorial de um número n (representado como n!) é o produto de todos os números de 1 até n.
let fatorial;
let multiplicacao = 1;
fatorial = Number(prompt("Digite um número"));
while (fatorial >= 1) {
    multiplicacao = multiplicacao * fatorial;
    fatorial = fatorial - 1;
}
alert("o fatorial  " + multiplicacao);
