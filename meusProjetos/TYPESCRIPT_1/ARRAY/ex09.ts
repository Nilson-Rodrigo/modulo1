/*Peça ao usuário 3 números e exiba o dobro de cada valor.*/

export
let numeros : Array<number> = [];

for (let i = 0; i < 3; i++){
    let num = Number(prompt('Digite um número'));
    numeros.push(num);
}
let dobro = numeros.map(n => n *2);
console.log(dobro);
