/*Peça 5 números e mostre o array com os valores multiplicados por 2.*/
export
let numeros : Array <number> = [];

for ( let i = 0; i<5; i++){
    let num = Number(prompt('Digite um número'));
    numeros.push(num*2);
}
console.log(numeros);
