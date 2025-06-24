//16. Peça um número e mostre os 10 primeiros múltiplos desse número


 let numeroMultiplo, adicionando,decimoMultiplo, multiplicando: number;
adicionando = 0;
multiplicando = 0;

numeroMultiplo = Number(prompt("Digite um número"))
decimoMultiplo= numeroMultiplo*10;

 while(multiplicando<decimoMultiplo){
   adicionando = adicionando +1;
 multiplicando = numeroMultiplo * adicionando;

   
   alert(adicionando+ "° múltiplo: "+multiplicando);
 }