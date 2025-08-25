"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notas = void 0;
/*No array let notas = [6, 4, 8, 5, 7];, filtre apenas as notas aprovadas (>=6).*/
exports.notas = [6, 4, 8, 5, 7];
for (let i = 0; exports.notas.length; i++) {
    if (exports.notas[i] >= 6) {
        console.log(exports.notas[i]);
    }
}
