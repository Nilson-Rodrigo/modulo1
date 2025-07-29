/*Peça 5 nomes e mostre apenas os que têm mais de 5 letras.*/

export
let nomes: Array<string> = [];
let nomesMaiorQue5: Array<string> = [];
for (let i = 0; i < 4; i++) {
    let pNome = String(prompt('Digite um nome')!);
    nomes.push(pNome);
    if (nomes[i].length > 5) {
        nomesMaiorQue5.push(nomes[i]);
    }
}
console.log(nomesMaiorQue5);
