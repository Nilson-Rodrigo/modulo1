"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numero = void 0;
exports.numero = Number(prompt("Digite um número de 1 a 7:"));
let dia = "";
switch (exports.numero) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-Feira";
        break;
    case 3:
        dia = "Terça-Feira";
        break;
    case 4:
        dia = "Quarta-Ferira";
        break;
    case 5:
        dia = "Quinta-Feira";
        break;
    case 6:
        dia = "Sexta-Feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        alert("O dia da semana não correspondente a um número");
}
alert(dia);
