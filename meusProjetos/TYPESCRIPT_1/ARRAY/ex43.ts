/*A partir de let verdadeiros = [true, false, true];, use map para transformar em strings ("Sim" ou "Não").*/

let verdadeiros = [true, false, true];

function transformar(trueOuFalse: boolean):string{
    if( trueOuFalse == true){
        return `Sim`;
    }
    return `Não`;
}

let simOuNao = verdadeiros.map(transformar);
console.log(simOuNao)