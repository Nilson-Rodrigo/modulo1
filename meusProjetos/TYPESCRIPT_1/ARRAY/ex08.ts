/*Solicite 4 números e mostre a soma de todos os elementos do array.*/
export
let numeros : Array<number> = [];
let soma : number = 0;

for (let i = 0; i<4; i++){
    let nota = Number(prompt('digite a nota'));
    numeros.push(nota);
soma = soma + numeros[i]
}
console.log(soma);
