//A partir do array let valores = [5, 8, 10, 3, 7];, filtre apenas os valores maiores que 6.

let valores = [5, 8, 10, 3, 7];
let maioresQue6: Array<number> = [];
for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 6) {
        maioresQue6.splice(0, 0, valores[i]);
    }
}
console.log(maioresQue6);