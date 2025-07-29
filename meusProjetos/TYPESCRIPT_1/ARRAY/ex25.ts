/*Escreva uma função que conte quantos elementos de um array são iguais a um
valor informado pelo usuário.*/
export
function numeros( n : number): number{
//criei um array com vários números
let listNum : Array<number> = [1,1,2,3,4,5,6,7,8,9,8,7,6,7,9,1,1,6,5,5,12];
let adic : number = 0;
for(let i = 0; i<listNum.length; i++){
if (n == listNum[i]){
adic = adic+ listNum[i];
}
}
return adic
}
console.log(numeros(1));