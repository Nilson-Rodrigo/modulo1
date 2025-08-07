/*Crie um objeto carro com as propriedades:
marca (string)

modelo (string)

ano (number)

Depois, adicione dinamicamente uma nova propriedade chamada cor com valor "preto".*/
let carro: { 
  marca: string;
  modelo: string;
  ano: number;
  [key: string]: any; 
} = {
  marca: '',
  modelo: '',
  ano: 0
};
carro.marca = 'volkswagen';
carro.modelo = 'gol';
carro.ano = 199;
carro.cor = 'preto';

console.log(carro);


