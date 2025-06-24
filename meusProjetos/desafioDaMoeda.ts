let m1: number=1;
let m2: number=1;
let m3: number=1;
let m4: number=1;
let m5: number=1;
let m6: number=1;
let m7: number=1;
let m8: number=1;
let m9: number=1;
let m10: number=1;

let evitaErro1:number = m1 + m2 + m3 + m4 + m5, evitaErro2:number = m6 + m7 + m8 + m9 + m10;

let g1:number = (m1 + m2 + m3);
let g2:number = (m4 + m5 + m6);
let g3:number= (m7 + m8 + m9);

if(evitaErro1!=evitaErro2){
    console.log("pesando");
if (g1==g2) {
    console.log("pesando");
    if (g1==g3){;
        console.log("m10 é a mais pesada");
    }  
} else{    
 if(g1!=g2){
    if(g1!=g3){
        console.log("pesando");
       if(m1==m2){
        console.log("pesando")
        console.log(" m3 é a mais pesada");
       } if (m1>m2){
        console.log("pesando");
        console.log(" m1 é a mais pesada");
       } if(m1<m2){
        console.log("pesando");
        console.log(" m2 é a mais pesada");
      } 
    }
}
if (g1==g2){
        if(m7==m8){
            console.log("pesando")
            console.log("m9 é a mais pesada")
        } if (m7>m8){
            console.log("pesando")
            console.log("m7 é a mais pesada")
        }if(m7<m8) {
            console.log("pesando")
            console.log("m8 é a mais pesada")
        }
    } if (g1==g3){  
        console.log("pesando");
            if(m4==m5){
                console.log("pesando");
                console.log("m6 é a mais pesada");
            } if (m4>m5){
                console.log("pesando");
                console.log("m4 é a mais pesada");
            } if(m4<m5){
                console.log("pesando");
                console.log("m5 é a mais pesada");
            }
            }
} 
}if(evitaErro1==evitaErro2){
 console.log("todas as moedas são iguais");
}