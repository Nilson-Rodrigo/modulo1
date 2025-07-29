//Crie uma função que receba um array e retorne o maior número.
function maior(n: Array<number> = []): number {
let m = n[0];
for (let i = 0; i < n.length; i++) {
if ( n[i] > m){
m = n[i];
}
}
return m
}
console.log(maior([1,2,3,4,5]));