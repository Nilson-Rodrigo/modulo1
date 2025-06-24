"use strict";
//6. Solicite ao usuário um número e exiba a tabuada dele de 1 a 10
let numeroTabuada, multiplica;
let contarDe1A10 = 1;
numeroTabuada = Number(prompt("Digite um número para exibir a tabuada do 1 ao 10"));
while (contarDe1A10 <= 10) {
    multiplica = numeroTabuada * contarDe1A10;
    alert(numeroTabuada + " x " + contarDe1A10 + "= " + multiplica);
    contarDe1A10 = contarDe1A10 + 1;
}
