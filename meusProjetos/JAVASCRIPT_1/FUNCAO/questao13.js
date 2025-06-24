"use strict";
/*Crie uma função que converta uma temperatura de Celsius para Fahrenheit.
1 ponto*/
function converterCParaF(c) {
    let fahrenheit;
    fahrenheit = (c * 1.8) + 32;
    return fahrenheit;
}
console.log(converterCParaF(30));
