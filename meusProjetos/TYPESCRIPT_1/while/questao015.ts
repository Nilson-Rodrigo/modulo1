//15. Peça a quantidade de alunos e depois as notas de cada um. Mostre a média geral da turma.
 let quantidadeDealuno, notas, contarAluno, somadorDeNota, mediaDasNotas: number;
somadorDeNota=0;
contarAluno = 0;

 quantidadeDealuno = Number(prompt("Digite a quantidade de alunos  com suas respectivas notas")); 

while(contarAluno<quantidadeDealuno){
    contarAluno= contarAluno+1;
 notas=Number(prompt("  A Nota do aluno "+ contarAluno+ " é : " ));
  somadorDeNota=somadorDeNota+notas;
}

mediaDasNotas = somadorDeNota/contarAluno;

 alert("A media das notas dos alunos é "+mediaDasNotas);