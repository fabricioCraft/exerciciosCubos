// IMPLEMENTE AQUI A SUA FUNÇÃO
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(
  usuariosCadastrados: TUsuario[],
  novoUsuario: TUsuario
): TUsuario[] | string {
  // seu código aqui

  let encontrado = false

  for(let usuario = 0; usuario < usuariosCadastrados.length; usuario++){
      if(usuariosCadastrados[usuario].email.includes(novoUsuario.email)){
          encontrado = true
      }
  }
  
  if(encontrado){
      return 'E-MAIL INVALIDO'
      
  }else{
      usuariosCadastrados.push(novoUsuario)
      return usuariosCadastrados
  }
}
export default solucao;
