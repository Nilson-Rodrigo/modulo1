/*Crie um array com 10 números aleatórios entre 0 e 100 e mostre a soma total.*/
export
let numeros : Array <number> = [];

let soma : number = 0;
for( let i = 0; i<10; i++){
let numero =Math.floor(Math.random() * 100) + 1;
numeros.push(numero);
soma+=numeros[i]
}
console.log(`soma : ${soma}\nArray aleatório : ${numeros} `);