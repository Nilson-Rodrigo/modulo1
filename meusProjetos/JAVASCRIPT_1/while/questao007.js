"use strict";
//Peça ao usuário que digite vários números. O programa deve somar esses números até que o valor 0 seja digitado.
let numeroAte0, guardarNumero;
guardarNumero = 0;
numeroAte0 = 1;
while (numeroAte0 != 0) {
    numeroAte0 = Number(prompt("Digite um número"));
    guardarNumero = numeroAte0 + guardarNumero;
}
alert(guardarNumero);
