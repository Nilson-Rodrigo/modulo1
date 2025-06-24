/*Crie uma função que receba um número e retorne a sua tabuada de 1 a 10 como uma string.
1 ponto*/
export
function  tabuada(n1: number): string{
    let i, multiplica: number;
for (let i =1; i <=10; i++){
multiplica = n1*i;
console.log (`${n1} X ${i} = ${multiplica}`);
}
return 'resultado\n'+tabuada;
}
tabuada(15);
