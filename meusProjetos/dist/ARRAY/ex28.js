"use strict";
/*Solicite ao usuário um número e verifique se ele existe dentro de um array com 10
números aleatórios (entre 1 e 50).*/
function perguntar(p = Number(prompt('Digite um número'))) {
    let numAleatorio = [];
    for (let i = 0; i < 10; i++) {
        numAleatorio.push(Math.floor(Math.random() * 50) + 1);
        if (p == numAleatorio[i]) {
            return true;
        }
    }
    console.log(`Numeros Sorteados: ${numAleatorio.join("- ")}`);
    return false;
}
console.log(perguntar());
