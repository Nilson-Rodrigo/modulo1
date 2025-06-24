//17. Peça números até o usuário digitar 100. Mostre quantas tentativas foram necessárias

let digitNum, tentativa: number;
digitNum = 0;
tentativa = 0;
alert("Descubra o número mágico \nDICAS: \n1-Três digitos, \n2-Quadrado perfeito \nAgora é com você, vamos!!!")
while(digitNum!=100){
digitNum= Number(prompt(" Digite um número"));
tentativa = tentativa + 1;


}
alert( "Tentativas: "+tentativa+"\nParabéns você acertou!!!");