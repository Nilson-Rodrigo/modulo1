/*Crie uma função que receba um número e retorne true se ele for múltiplo de 3 e 5 ao mesmo tempo e false caso contrário.
1 ponto*/
function multiploDe15 (n1: number): string{
if((n1 % 3== 0) && (n1 % 5 == 0)){
    return 'multiplo de 15';
}
return 'não é multiplo de 15';
}
console.log(multiploDe15(15));
