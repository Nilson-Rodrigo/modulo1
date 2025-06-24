/*Crie uma função que receba um número e retorne true se ele for primo.
1 ponto*/

function ePrimo (n1: number): boolean{
    let i: number;
    for(i = 2; i<n1; i++){
        if  ((n1 % i == 0) && (n1 != 1)){
            return false;
        }
    } 
   return true; 
}
console.log(ePrimo(6));
