/*Solicite 10 números e mostre apenas os múltiplos de 3.*/

export
let numeros : Array<number> = [];
for(let i = 0; i<10; i++){
   let num = Number(prompt('Digite um número'));
   numeros.push(num);
}
let multiplo = numeros.filter(num => num % 3 == 0);
console.log(multiplo); 
