/*Crie uma classe Carro com os atributos marca, modelo e ano. Use o construtor para definir esses valores ao criar um novo carro.*/

class Carro {
    marca : string;
    modelo : string;
    ano : number;
    constructor(marca:string,modelo:string,ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    public apresentar():string{
        return `MARCA:${this.marca}\nMODELO:${this.modelo}\nANO:${this.ano}`
    }
}
let novoCarro = new Carro('volkswagen', 'gol', 2005);
console.log(novoCarro.apresentar);
