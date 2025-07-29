//Solicite 5 nomes ao usuário e mostre-os em ordem inversa.

let nomes : Array<string> = [];
for ( let i = 0; i < 5; i++){
    let adiciona : string = String(prompt('')!);
    nomes.unshift(adiciona);
}
console.log(nomes);
