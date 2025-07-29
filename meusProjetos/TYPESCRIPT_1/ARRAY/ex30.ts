/*Monte um programa que gere 20 números aleatórios de 1 a 100, armazene em um
array e mostre apenas os que estão entre 30 e 70.*/
export
function numeros (n : Array<number> = []):string{
for(let i = 0; i<20; i++){
let aleatorio = Math.floor(Math.random()*100)+1;
if((aleatorio >= 30) && (aleatorio <= 70)){
n.push(aleatorio);
}
}
return n.join(", ");
}
console.log(numeros());