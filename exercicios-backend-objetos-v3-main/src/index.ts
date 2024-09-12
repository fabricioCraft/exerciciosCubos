// Exercicio 1 

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

// type TPrato = {
//     nome: String
//     valor: Number
//     quantidade: Number
// }

// const informacoesPrato = {
//     nome: 'Arroz',
//     valor: 15,
//     quantidade: 1
// }

// if (informacoesPrato.nome && informacoesPrato.quantidade > 0){
//     console.log(informacoesPrato.valor)
// }else{
//     console.log('PRATO INDISPONIVEL')
// }

// Exercicio 3

// type TAluno = {
//     matricula: String
//     nome: String
//     media: Number
// }

// const aluno = {
//     matricula: "20191IMIM0433",
//     nome: 'Marcos',
//     media: 5.5
// }

// if (aluno.media >= 6){
//     console.log('APROVADO')

// }else{
//     console.log('REPROVADO')
// }

// Exercicio 4

// type TFilme = {
//     nome: String
//     notas: Number[]
// }

// const filme1: TFilme = {
//     nome:'Batman',
//     notas: [9, 10]
// }

// const filme2: TFilme = {
//     nome: 'Harry Potter',
//     notas: [10, 9]
// }

// let mediaFilme1 = 0
// let mediaFilme2 = 0

// for (let nota = 0; nota < filme1.notas.length - 1; nota++){

//     mediaFilme1 = (Number(filme1.notas[nota]) + Number(filme1.notas[nota + 1]))/2
// }

// for (let nota = 0; nota < filme2.notas.length - 1; nota++){
//     mediaFilme2 = (Number(filme2.notas[nota]) + Number(filme2.notas[nota + 1]))/2
// }

// if (mediaFilme1 > mediaFilme2){
//     console.log(filme1.nome)
// }else if (mediaFilme2 > mediaFilme1){
//     console.log(filme2.nome)
// }else{
//     console.log('EMPATE')
// }

// Exercicio 5

// type TDados = {
//     time: string
//     probabilidades: number[]
// }

// const dados : TDados = {
//     time: 'Flamengo',
//     probabilidades: [70, 80, 65, 75, 85]
// }

// let soma = 0
// let total = 0
// let media = 0

// for (let probabilidade = 0; probabilidade < dados.probabilidades.length; probabilidade++){

//     soma += dados.probabilidades[probabilidade]
//     total = dados.probabilidades.length
//     media = soma / total
// }

// if (dados.probabilidades.length > 0){
//     console.log(media)
// }else{
//     console.log('DADOS INSUFICIENTES')
// }

//Exercicio 6

type TProduto = {
    loja: string
    preco: number
}

const produtosEncontrados : TProduto[]= [
    { loja: "Loja 1", preco: 142.8 },
    { loja: "Loja 2", preco: 15.7 },
    { loja: "Loja 3", preco: 98 },
    { loja: "Loja 4", preco: 5 },
    
]

// Primeiro passo: fixar um número
let menorPreco = produtosEncontrados[0]


// Segundo passo: percorrer a lista de produtos encontrados até a penúltimo posição
for (let valor = 1; valor < produtosEncontrados.length; valor++){

// Terceiro passo: comparar os demais números com o número fixado
    if(produtosEncontrados[valor].preco < menorPreco.preco ){

// Quarto passo: guardar o menor valor em uma variável e atualizar para o menor valor
        menorPreco = produtosEncontrados[valor] 
    }
}

// Quinto passo: retornar o menor valor

console.log(menorPreco.loja)








   












