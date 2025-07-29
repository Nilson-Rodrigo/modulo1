/*Solicite 10 números e conte quantos são pares e quantos são ímpares.*/

export
let numeros : Array<number> = [];
let par : number = 0;
let impares : number = 0;
for ( let i = 0; i < 10; i++){
    let adiciona : number = Number(prompt('digite um número')!);
numeros.push(adiciona);
    if (numeros[i]% 2 == 0 && numeros[i] != 0){
        par++;
    } if(numeros[i] % 2 != 0){
        impares++;
    }
}
console.log(`[TOTAL = PARES: ${par} | IMPARES: ${impares}]`);
