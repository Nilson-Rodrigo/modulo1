/*Crie um array com 5 nomes e permita que o usuário substitua um deles
informando a posição e o novo nome.*/
export
let nomes : Array<string> = ['Ana ', 'carla ', 'emanoel ', 'luiza ', 'nilson'];
let p1 = Number(prompt(`${nomes}\nDado o Array com indice começando em 0: \n${[nomes]} \nDigite
em qual posição deseja alterar`));
let p2 = String(prompt('Qual o novo nome?'));
nomes[p1] = p2;
alert(nomes);
