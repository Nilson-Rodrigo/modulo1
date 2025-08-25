"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
/*Transforme o array ["ana", "bruno", "carla"] para letras maiúsculas usando map.*/
exports.nomes = ["ana", "bruno", "carla"];
function maiusculas(nome) {
    return `${nome.toUpperCase()}`;
}
let nomesMaiusculos = exports.nomes.map(maiusculas);
console.log(nomesMaiusculos);
