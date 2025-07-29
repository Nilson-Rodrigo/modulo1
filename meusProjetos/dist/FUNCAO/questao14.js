"use strict";
//Crie uma função que receba um ano e retorne true se for bissexto.
function anoBissexto(ano) {
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        return 'bissexto';
    }
    return 'não é bissexto';
}
console.log(anoBissexto(1900));
