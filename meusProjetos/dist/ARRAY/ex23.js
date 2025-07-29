"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista = lista;
/*Crie uma função que receba um array de strings e retorne a quantidade de nomes
com mais de 6 letras.*/
function lista(nomes = []) {
    let reserva = [];
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].length > 6) {
            reserva.push(nomes[i]);
        }
    }
    // join serve para juntar todos os elementos do array em uma única string
    return reserva.join(", ");
}
console.log(lista(['ana', 'carlos', 'vitor', 'douglas', 'kaique', 'silvana']));
