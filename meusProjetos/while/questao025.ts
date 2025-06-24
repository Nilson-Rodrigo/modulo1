// Peça dois númerosne verifique se o primeiro é divisivel pelo segundo.
export

let numero1Texto = prompt("Digite o primeiro número:") || "";
let numero2Texto = prompt("Digite o segundo número:") || "";

while (
  numero1Texto === "" ||
  numero2Texto === "" ||
  numero2Texto === "0"
) {
  alert("Por favor, digite dois números válidos. O segundo não pode ser zero.");
  numero1Texto = prompt("Digite o primeiro número:") || "";
  numero2Texto = prompt("Digite o segundo número:") || "";
}

let numero1 = Number(numero1Texto);
let numero2 = Number(numero2Texto);

if (numero1 % numero2 === 0) {
  alert(numero1 + " é divisível por " + numero2);
} else {
  alert(numero1 + " não é divisível por " + numero2);
}