"use strict";
// Peça a idade de uma pessoa e diga se ela é maior de idade (18 anos ou mais ).
let idade = -1;
while (idade < 0) {
    idade = Number(prompt("Qual a sua idade?"));
    if (idade >= 0) {
        if (idade >= 18) {
            alert("Você é maior de idade.");
        }
        else {
            alert("Você é menor de idade.");
        }
    }
    if (idade != idade) {
        alert("Por favor, insira uma idade válida.");
    }
}
