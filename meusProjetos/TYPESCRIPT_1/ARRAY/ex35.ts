//No array let letras = ["a", "b", "c", "d"];, use splice para inserir "x" e "y" entre "b" e "c".

let letras : Array<string> = ["a", "b", "c", "d"];

letras.splice(2,0,"x", "y");
console.log(letras);