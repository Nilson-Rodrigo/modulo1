"use strict";
//Solicite 5 nomes ao usuário e mostre-os em ordem inversa.
let nomes = [];
for (let i = 0; i < 5; i++) {
    let adiciona = String(prompt(''));
    nomes.unshift(adiciona);
}
console.log(nomes);
