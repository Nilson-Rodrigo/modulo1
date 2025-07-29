"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes = void 0;
/*Crie um array com 5 nomes e permita que o usuário substitua um deles
informando a posição e o novo nome.*/
exports.nomes = ['Ana ', 'carla ', 'emanoel ', 'luiza ', 'nilson'];
let p1 = Number(prompt(`${exports.nomes}\nDado o Array com indice começando em 0: \n${[exports.nomes]} \nDigite
em qual posição deseja alterar`));
let p2 = String(prompt('Qual o novo nome?'));
exports.nomes[p1] = p2;
alert(exports.nomes);
