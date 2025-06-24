"use strict";
// solicite uma senha ao usuário e só permita continuar se a senha digitada for "1234". Repita o pedido até que a soma esteja correta.
let numero1234;
numero1234 = 0;
while (numero1234 == 1234) {
    numero1234 = Number(prompt("ACESSO NEGADO\nDigite uma senha"));
}
alert("ACESSO LIBERADO");
