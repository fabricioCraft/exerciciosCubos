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

// const endereco: string = "Rua Cidade de Alma, 24, Cidade de Almeirim, AL"

// const enderecoSemEspaco: string = endereco.replaceAll(" ", "")

// const arrayEndereco: string[] = enderecoSemEspaco.split(",")

// const eNumero = typeof Number(arrayEndereco) === 'number' ? true : false




// console.log(enderecoSemEspaco);
// console.log(arrayEndereco);
// console.log(eNumero)



// const arrayEndereco: string[] = enderecoSemEspaco.split(",")

// const eNumero = arrayEndereco[1].trim() === typeof Number ? true : false  

// console.log(arrayEndereco)
// console.log(eNumero)
// console.log(arrayAPartirDoNumero)
// console.log(indexNumero);


// Exercicio 5

const cpf = "000000000-00"

const indexTraco = cpf.indexOf("-")

if (cpf.slice(0, indexTraco).length === 9 && cpf.slice(-2).length === 2) {
    console.log ('CPF VALIDO')
} else {
    console.log ('CPF INVALIDO')
}
console.log(indexTraco);





