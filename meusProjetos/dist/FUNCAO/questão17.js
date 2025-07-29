"use strict";
/*Crie uma função que simule um dado de 6 faces, retornando um número aleatório entre 1 e 6.*/
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(aleatorio(1, 6));
