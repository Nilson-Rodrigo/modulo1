/*Crie um programa que simule a votação para 3 candidatos (1, 2 ou 3), usando um
array para armazenar os votos (ex: [1,2,1,3,2,1]) e exiba o vencedor.
/* Na votação de lider da turma 3 pessoas se interessaram pelo o cargo, porém é
necessário apenas um, dessa forma
os alunos tiveram a ideia de eleger por votação, a sala contém 33 alunos, só que o voto é
secreto, supomos que na aleatoriedade
um dos 3 cadidatos ganharam. Precisamos saber ---> A seguir uma solução possivel
1° pessoa : 1;
2° pessoa : 2
3° pessoa : 3*/
function eleicao (votos: Array<number> = []){
let p1,p2,p3 : number
p1 = 0;
p2 = 0
p3 = 0;
for (let i = 0; i <33; i++){
votos.push(Math.floor(Math.random()*3)+1);
if(votos[i]==1){
p1++;
}if (votos[i] == 2){
p2++;
}if ( votos[i] == 3){
p3++;
}
}
console.log(votos);
if((p1>p2) && (p1>p3)){
console.log(' 1 vencedor');
}else if((p2>p1) && (p2>p3)){
console.log(' 2 vencedor');
} else if((p3>p1) && (p3>p2)){
console.log(' 3 vencedor');
} else{
console.log(' empate');
}
}
eleicao();