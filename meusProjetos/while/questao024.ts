// Peça nome e idade e mostre: "olá [nome], você tem [idade] anos!"
export
let nome = "";
let idade = "";

while (nome === "") {
  nome = prompt("Digite seu nome:") || "";
}

while (idade === "") {
  idade = prompt("Digite sua idade:") || "";
}

alert("Olá " + nome + ", você tem " + idade + " anos!");