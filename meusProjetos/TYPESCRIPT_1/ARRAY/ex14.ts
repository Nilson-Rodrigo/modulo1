/*Solicite 6 números e mostre quantos são maiores que a média.*/
export
let numeros : Array<number> = [];
let soma : number = 0;
for (let i = 0; i<6; i++){
    let solitacao = Number(prompt('Digite um número'));
    numeros.push(solitacao);
    soma += numeros[i]
}
let media = soma/numeros.length;
let maiorQueMedia = numeros.filter(num => num > media);
console.log(maiorQueMedia);
