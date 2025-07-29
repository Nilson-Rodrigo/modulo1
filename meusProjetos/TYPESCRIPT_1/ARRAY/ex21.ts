/*Crie uma função que receba um array de números e retorne a média.*/
export
let soma : number = 0;
function media (a : Array <number> = []): string{
for (let i = 0; i<a.length; i++){
soma = soma + a[i];
}
return ` Média = ${soma/a.length}`;
}
console.log(media([0,2,4]));
