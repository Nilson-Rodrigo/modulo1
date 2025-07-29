"use strict";
/*Crie uma função que receba a idade e retorne a categoria: criança (<12), adolescente (12-17), adulto (18-59) ou idoso (60+)*/
function categoria(idade) {
    if (idade < 12) {
        return 'Criança';
    }
    if ((idade >= 12) && (idade <= 17)) {
        return 'adolescente';
    }
    else if ((idade >= 18) && (idade <= 59)) {
        return 'adulto';
    }
    return 'idoso';
}
console.log(categoria(67));
