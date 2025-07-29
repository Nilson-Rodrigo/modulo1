/*Solicite 5 números e informe o maior e o menor valor.*/
export
let numeros : Array<number> = [];
let maior: number = 0;
let menor: number = 0;
for ( let i = 0; i < 5; i++){
    let adiciona : number = Number(prompt('digite um número')!);
numeros.push(adiciona);
    if (i == 0){
        maior = adiciona;
        menor = adiciona;
    } else{
        if (adiciona > maior){
            maior = adiciona
        } if (adiciona < menor){
            menor = adiciona;
        }
}
}
alert('menor ='+menor+'\nmaior = '+maior);
