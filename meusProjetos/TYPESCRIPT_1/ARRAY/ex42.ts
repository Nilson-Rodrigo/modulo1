/*Transforme o array ["ana", "bruno", "carla"] para letras maiúsculas usando map.*/
export
let nomes =  ["ana", "bruno", "carla"];

function maiusculas(nome: string): string{
return `${nome.toUpperCase()}`;
}

let nomesMaiusculos = nomes.map(maiusculas);
console.log(nomesMaiusculos);