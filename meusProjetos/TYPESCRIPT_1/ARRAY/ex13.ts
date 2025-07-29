/*Armazene 7 números inteiros e mostre os que são negativos.*/
export
let  numeros: Array<number> = [1, 3, 5,6,-9, -8, -11];
let negat = numeros.filter(num => num<0);
console.log(negat);