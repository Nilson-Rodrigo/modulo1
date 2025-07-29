"use strict";
//Use filter para retornar apenas os nomes com 5 letras no array ["Paulo", "Lívia", "Lucas", "Tami"].
Object.defineProperty(exports, "__esModule", { value: true });
exports.letras = void 0;
exports.letras = ["Paulo", "Livia", "Lucas"];
function filtrar(filtrado) {
    for (let i = 0; i < exports.letras.length; i++) {
        if (exports.letras[i].length >= 5) {
            filtrado.push();
        }
    }
    return `${filtrado}`;
}
console.log([filtrar]);
