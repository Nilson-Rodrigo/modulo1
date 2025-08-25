/*Crie um objeto empresa com:
nome (string)

endereco (objeto com rua, numero e cidade)

areas (array de strings representando setores, ex: ["RH", "TI", "Financeiro"])

Depois, imprima o nome da cidade onde a empresa está localizada e o nome da segunda área.*/
export
class Empresa {
    nome: string;
    rua: string;
    numeroResidencia: number;
    cidade:string;
    setores:string[] = [];
    constructor(nome:string,rua:string,n:number, cidade:string,setores:string[]){
        this.nome = nome;
        this.rua = rua;
        this.numeroResidencia = n;
        this.cidade = cidade;
        this.setores = setores
    }
}

let microsoft = new Empresa('microsoft','Av. Chedid Jafet',75,'São Paulo, SP',['Estagiário', 'Engenheiro de Software', 'Diretor', 'Gerente de Vendas']);

console.log(`CIDADE: ${microsoft.cidade}
    LOCALIZAÇÃO: ${microsoft.rua}, ${microsoft.numeroResidencia}
    ÁREAS: ${microsoft.setores[1]}`);