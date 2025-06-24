// Peça dois números e mostre a soma, subtração, multiplicação e divisão
export 
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;

let mensagem = "Soma = " + soma +
               "\nSubtração = " + subtracao +
               "\nMultiplicação = " + multiplicacao;

if (n2 !== 0) {
  let divisao = n1 / n2;
  mensagem += "\nDivisão = " + divisao;
} else {
  mensagem += "\nDivisão = Impossível dividir por zero";
}

alert(mensagem);