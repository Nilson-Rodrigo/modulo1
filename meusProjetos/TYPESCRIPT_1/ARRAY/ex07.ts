/*Crie um array com 6 notas e calcule quantas estão acima de 7.*/
export
let notas : Array<number> = [];

let incremento: number = 0;
for (let i = 0; i<6; i++){
    let adcNota = Number(prompt('digite uma nota')!);
    notas.push(adcNota);
    if (adcNota > 7){
        incremento++;
    }
}
console.log('notas acima de 7 = '+ incremento);
