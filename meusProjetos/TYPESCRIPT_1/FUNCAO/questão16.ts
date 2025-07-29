/*Crie uma função que receba três notas e retorne se o aluno está aprovado (média ≥ 7)*/

function avaliacao(nota: number): string{
    if (nota >= 7){
        return 'aprovado';
    }
    return 'reprovado';
}