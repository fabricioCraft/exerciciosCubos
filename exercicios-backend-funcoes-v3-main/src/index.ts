// Exercicio 1

// type TNovoSaldo = (saldoAtual: number, valor: number) => number 

// function calcularNovoSaldo (saldoAtual: number, valor: number): number{

//     return saldoAtual + valor

// }

// const resultado = calcularNovoSaldo(1259, 568)

// console.log(resultado)

// Exercicio 3

// const valoresValidos = [30, 50, 60,23, 14, 57]
// const valorLido = 60
// let resultado = false

// // console.log(valoresValidos[0])

// for(let moeda = 0; moeda < valoresValidos.length; moeda++){
//     if(valorLido === valoresValidos[moeda]){
//         resultado = true
//         break
//     }else{
//         resultado = false
//     }
// }

// console.log(resultado)

// Exercicio 4

type TResultado = string
type TNumero = number
type TConcorrentes = {
    nome: string
    numeroCartela: number
}

const numeroSorteado: TNumero = 5;
const pessoasConcorrendo: TConcorrentes[] = [
  { nome: "Ana", numeroCartela: 4 },
  { nome: "João", numeroCartela: 1 },
  { nome: "Pedro", numeroCartela: 3 },
  { nome: "Maria", numeroCartela: 2 },
  { nome: "Lucas", numeroCartela: 5 },
];


let resultado = ''

for(let numero = 0; numero < pessoasConcorrendo.length; numero++){
    
    let pessoaSorteada = pessoasConcorrendo[numero] 

    if(numeroSorteado === pessoaSorteada.numeroCartela){
        resultado = pessoaSorteada.nome
        break
    }else{
        resultado = 'undefined'
    }
    
}

console.log(resultado)
