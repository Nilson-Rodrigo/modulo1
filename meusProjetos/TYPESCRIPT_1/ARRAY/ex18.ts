/*Peça 4 nomes e mostre o primeiro e o último digitados.*/
export
let nomes : Array<string> = [];
for ( let i = 0; i < 4; i++){
let nome = String(prompt('Digite um nome'));
nomes.push(nome);
}
console.log(nomes[0]);
console.log(nomes[3]);
