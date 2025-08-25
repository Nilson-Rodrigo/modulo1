/*Crie dois objetos professor1 e professor2 com as mesmas propriedades:
nome

disciplina

tempoExperiencia (em anos)

Depois, compare qual dos dois tem mais experiência e imprima o nome dele*/

class Professor {
    nome : string;
    disciplina : string;
    tempoExperiencia: number;
    constructor(n:string, d: string, tE: number){
        this.nome = n;
        this.disciplina = d;
        this.tempoExperiencia = tE;
    }
}

let professor1 = new Professor('Augusto','Matemática',222);
let professor2 = new Professor('Nilson','Informática',440);

if(professor1.tempoExperiencia> professor2.tempoExperiencia){
    console.log(professor1.nome);
}else{
    console.log(professor2.nome);
}

