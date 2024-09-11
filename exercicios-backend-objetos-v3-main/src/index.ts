// Exericio 1

// type TAlunos = {
//     matricula: String
//     nome: String
//     idade: Number
// }

// const alunos = {
//     matricula: '2014A',
//     nome: 'Ana',
//     idade: 20
// }

// console.log(alunos)

// Exercicio 2

type TPrato = {
    nome: String
    valor: Number
    quantidade: Number
}

const informacoesPrato = {
    nome: 'Macarrão',
    valor:  15,
    quantidade: 1
}

if(informacoesPrato.nome){
    console.log(informacoesPrato.valor)
}else{
    console.log('PRATO INDISPONIVEL')
}