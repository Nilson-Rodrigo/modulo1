"use strict";
//3. Solicite um número inteiro positivo. Mostre todos os números ímpares de 0 até esse número.
let numero3;
let numeroDeReferencia = 1;
numero3 = Number(prompt("Digite um número"));
while (numero3 >= numeroDeReferencia) {
    alert(numeroDeReferencia);
    numeroDeReferencia = numeroDeReferencia + 2;
}
