"use strict";
/*Solicite 6 valores e mostre apenas os que estão entre 10 e 50.*/
let numero = [];
for (let i = 0; i < 6; i++) {
    let num = Number(prompt('Digite um número'));
    numero.push(num);
    if ((numero[i] >= 10) && (numero[i] <= 50)) {
        console.log(numero[i]);
    }
}
