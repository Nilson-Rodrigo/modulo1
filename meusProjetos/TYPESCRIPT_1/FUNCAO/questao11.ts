
/*Crie uma função que calcule o fatorial de um número.
1 ponto*/
export

function fatorial ( n1: number): number{
    let i : number;
    let r = 1;
    for(i = 1; i<=n1; i++){
        r = r * i;
    }
    return r;
}
console.log(fatorial(3));
