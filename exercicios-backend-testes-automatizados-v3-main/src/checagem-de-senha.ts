export const checarSenha = ((senha: string) => {

    const senhaValida = Number(senha)

    if(senha.length >= 4 && senhaValida){

    return 'SENHA VALIDA'}

    return 'SENHA INVÁLIDA'

})


console.log(checarSenha('12b34'))


