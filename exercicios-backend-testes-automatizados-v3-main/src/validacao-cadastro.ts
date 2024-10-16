type TUsuario = {
    nome: string
    email: string
    senha: string
}

const dados = {
    nome: "",
    email: "",
    senha: "",
  }

export const validarUsuario = ((dados: TUsuario): string | boolean => {

    if(dados.nome !== '' && dados.email !== '' && dados.senha !== ''){
        return true
    }

    return 'Todos os campos são obrigatórios'

}) 

console.log(validarUsuario({
    nome: "",
    email: "",
    senha: ""}
));

