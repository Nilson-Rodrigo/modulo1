/*Armazene 5 nomes em um array. Peça um nome ao usuário e verifique se ele está na lista.*/

export
let nomes : Array<string>;
nomes = ['iallen', 'gabio', 'nilson', 'vaidarseucu', 'douglas']
function verifica (nome : string): string{
    for(let i = 0; i<nomes.length; i++){
         if(nome == nomes[i]){
            return 'nome já está na lista';
         }
    }
    return 'nome não está na lista';
}
console.log(verifica(prompt('digite um nome')!));
