"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nome = void 0;
// Peça nome e idade e mostre: "olá [nome], você tem [idade] anos!"
exports.nome = "";
let idade = "";
while (exports.nome === "") {
    exports.nome = prompt("Digite seu nome:") || "";
}
while (idade === "") {
    idade = prompt("Digite sua idade:") || "";
}
alert("Olá " + exports.nome + ", você tem " + idade + " anos!");
