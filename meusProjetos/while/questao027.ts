// Peça um número e diga se ele é positivo, negativo ou zero.
export
let texto = "";
let numero = 0;
let continuar = 1;

while (continuar === 1) {
  texto = prompt("Digite um número:") + "";
  numero = Number(texto);
  continuar = texto + "0" === "0" ? 1 : 0;
}

if (numero > 0) {
  alert("O número é positivo");
}  if (numero < 0) {
  alert("O número é negativo");
} if(numero==0) {
  alert("O número é zero");
} else{
    alert("Número inválido");
}