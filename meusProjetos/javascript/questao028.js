"use strict";
//Peça a nota de um aluno. Se for 6 ou mais, mostre "Aprovado", senão "Reprovado".
let nota = -1;
let entrada;
while (nota < 0 || nota > 10) {
    entrada = prompt("Digite a nota do aluno (0 a 10):");
    nota = Number(entrada);
    if (nota < 0 || nota > 10) {
        alert("Nota inválida. Digite um número entre 0 e 10.");
    }
}
if (nota >= 6) {
    alert("Aprovado");
}
else {
    alert("Reprovado");
}
