"use strict";
// Solicite uma senha. Se for "ads123", mostre "Acesso permitido", senão "Sneha Incorreta"
let senha = "";
while (senha !== "ads123") {
    senha = prompt("Digite a senha:");
    if (senha === "ads123") {
        alert("Acesso permitido");
    }
    else {
        alert("Senha incorreta");
    }
}
