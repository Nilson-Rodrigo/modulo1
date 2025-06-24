"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entrada1 = void 0;
// solicite dois números e diga qual é o maior( ou se são iguais )
exports.entrada1 = "";
while (exports.entrada1 === "") {
    exports.entrada1 = prompt("Digite o primeiro número:") || "";
}
let num1 = +exports.entrada1;
let entrada2 = "";
while (entrada2 === "") {
    entrada2 = prompt("Digite o segundo número:") || "";
}
let num2 = +entrada2;
if (num1 > num2) {
    alert("O maior número é " + num1);
}
else if (num2 > num1) {
    alert("O maior número é " + num2);
}
else {
    alert("Os números são iguais");
}
