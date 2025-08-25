/*No array let notas = [6, 4, 8, 5, 7];, filtre apenas as notas aprovadas (>=6).*/
export
let notas = [6, 4, 8, 5, 7];
for(let i = 0; notas.length; i++){
    if(notas[i] >= 6){
        console.log(notas[i]);
    }
}