/*Crie um array com 5 valores e exiba-os em formato de lista numerada.*/

export
let numeros : Array<number> = [10, 3, 7, 8 , 9];
for(let i = 0; i < 5; i++){
    console.log(`${i+1}. ${numeros[i]}`);
}
