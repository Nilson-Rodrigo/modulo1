"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista = lista;
/*Crie uma função que receba um array de strings e retorne um novo array com
todos os elementos em letras maiúsculas.*/
function lista(nomes = []) {
    let maiusculas = [];
    for (let i = 0; i < nomes.length; i++) {
        /* toUpperCase é um método string em JavaScript/TypeScript que transforma todas as
        letras minúsculas de um texto em letras maiúsculas*/
        maiusculas.push(nomes[i].toUpperCase());
    }
    return maiusculas.join(", ");
}
console.log(lista(['ana', 'carlos', 'vitor', 'douglas', 'kaique', 'silvana']));
