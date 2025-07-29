"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
/*Com let nomes = ["Ana", "Bruno", "Carla", "Daniel"];, substitua "Bruno" por "Beatriz" usando splice.*/
exports.nomes = ["ana", "bruno", "carla", "daniel"];
exports.nomes.splice(1, 1, "Beatriz");
console.log(exports.nomes);
