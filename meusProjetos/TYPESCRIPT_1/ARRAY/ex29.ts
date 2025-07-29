/*Crie uma função que remova todas as ocorrências de um número específico
dentro de um array.*/
function remove0 (n: Array<number>): string{
for(let i = 0; i<10; i++){
n.push(Math.floor(Math.random()*5-0+1)+1);
}
console.log(n)
return n.filter(n => n !== 0).join(", ");
}
console.log(remove0([]));