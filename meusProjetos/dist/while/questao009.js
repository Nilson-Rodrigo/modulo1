"use strict";
//9. Peça ao usuário para digitar números até que um número negativo seja digitado. No fim, exiba quantos números positivos foram informados.
let numeroAteUmNegativo, contarQuantidadeDePositivos;
numeroAteUmNegativo = 1;
contarQuantidadeDePositivos = 0;
while (numeroAteUmNegativo > 0) {
    numeroAteUmNegativo = Number(prompt("Digite um número"));
    if (numeroAteUmNegativo > 0) {
        contarQuantidadeDePositivos = contarQuantidadeDePositivos + 1;
    }
}
alert("A quantidade de numeros positivos é: " + contarQuantidadeDePositivos);
