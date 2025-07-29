/*Crie um array com 10 números e calcule a média deles.*/
export
let numeros1A10 : Array <number>;
numeros1A10 = [1,2,3,4,5,6,7,8,9,10]
let i : number;
 let soma : number = 0;
for( i = 0; i<numeros1A10.length; i++){
    soma = soma + numeros1A10[i];
}
let media: number = soma/numeros1A10.length;
console.log(media);
