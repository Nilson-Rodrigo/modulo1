/*Crie uma função que receba dois números e retorne a potência (base^expoente).
1 ponto*/

function potencia ( n1: number, n2: number): number{
    let n1_Elevado_n2: number;
   n1_Elevado_n2= n1**n2;
    return n1_Elevado_n2
}
console.log(potencia(2,4));
