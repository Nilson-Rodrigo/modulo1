"use strict";
/*Crie uma função que receba dois números e retorne a potência (base^expoente).
1 ponto*/
function potencia(n1, n2) {
    let n1_Elevado_n2;
    n1_Elevado_n2 = Math.pow(n1, n2);
    return n1_Elevado_n2;
}
console.log(potencia(2, 4));
