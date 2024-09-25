// Exercicio 1

// const email: string = "shaolin@cubos" 

// const emailValido = email.includes('@')

// if(emailValido){
//     console.log('VALIDO')
// }else{
//     console.log('INVALIDO')
// }
    

// console.log(emailValido)


// Exercício 2

// const comentario: string = "Esse COVID é muito perigoso!"

// const comnetarioFormatado: string = comentario.toLowerCase() 

// if(comnetarioFormatado.includes('covid') || comnetarioFormatado.includes('pandemia')){
//     console.log(false)
// }else{
//     console.log(true)
// }

// console.log(comnetarioFormatado);


// Exercicio 3

// const numeroCadastrado: string = "32012345678"


// const numeroFormatado: string = numeroCadastrado.substring(0, 2).padEnd(9, '*') + numeroCadastrado.slice(-2)

// console.log(numeroFormatado)


// Exercicio 4

//Comentário 1: Tive dificultade com o uso da função isNaN(), pois eu estava retornando true para valores 
//que eram NaN e isso estava gerando erros no teste. Depois que eu entendi como usá-lo foi tranquilo de fazer passar
//por todos os testes.

//Comentário 2: Meu primeiro código para esse teste foi o descrito abaixo, porém eu quis imaginar um caso real em que vc recebe
//os dados de um formulário de cliente e esses dados seriam enviados para o servidor e armazenado em um objeto.

//Código anterior:

/*
const endereco: string = "Rua Cidade de Alma, 24, Cidade de Almeirim, AL"
const arrayEndereco = endereco.split(',')
const numeroSemEspaco = arrayEndereco[1].trim()
const numeroConvertido = Number(numeroSemEspaco)

if(isNaN(numeroConvertido)){
    console.log(false)
}else{
    console.log(true)
}
*/



type TUsuario = {
    rua: string
    numero: string
    bairro: string
    estado: string
}

const endereco: string = "Rua Cidade de Alma, 24a, Cidade de Almeirim, AL"
const arrayEndereco = endereco.split(',')

const usuario: TUsuario = {
    rua: arrayEndereco[0],
    numero: arrayEndereco[1],
    bairro: arrayEndereco[2],
    estado: arrayEndereco[3]
}


const numeroFormatado = usuario.numero.trim()
const numeroConvertido = Number(numeroFormatado)

if(isNaN(numeroConvertido)){
    console.log(false)

}else{
    console.log(true)
}




// Exercicio 5

// const cpf = "000000000-00"

// const indexTraco = cpf.indexOf("-")

// if (cpf.slice(0, indexTraco).length === 9 && cpf.slice(-2).length === 2) {
//     console.log ('CPF VALIDO')
// } else {
//     console.log ('CPF INVALIDO')
// }
// console.log(indexTraco);





