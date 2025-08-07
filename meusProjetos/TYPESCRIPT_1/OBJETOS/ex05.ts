/*Dado o objeto usuario abaixo, adicione um método chamado exibirInfo que imprime no console o nome e o email do usuário.
*/
let usuario = {
  nome: "Joana",
  email: "joana@email.com",
  exibirInfo: function(){
console.log(`NOME = ${usuario.nome}\n EMAIL: ${usuario.email}`);
  }
}
console.log(usuario.exibirInfo());
