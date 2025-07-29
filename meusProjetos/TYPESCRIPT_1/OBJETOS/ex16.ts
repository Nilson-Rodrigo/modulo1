/*Crie uma classe Retangulo com atributos largura e altura e um método calcularArea() que retorna a área.*/

class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
    public calcularArea(): string {
        return `Área = ${this.largura * this.altura}UA`;
    }
}

let reangulo1 = new Retangulo(10,23);

console.log(reangulo1.calcularArea());