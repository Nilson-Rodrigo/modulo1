/*Com o array let temperaturas = [30, 25, 28];, converta cada valor para Fahrenheit (C * 1.8 + 32) usando map.*/

let temperaturas = [30, 25, 28];

function converter (temperatura:number){
    return temperatura * 1.8 + 32;
}

let conversão = temperaturas.map(converter);

console.log(conversão);