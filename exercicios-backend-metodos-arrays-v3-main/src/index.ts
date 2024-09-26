// Exercicio 1

// const livros: string[] = []

// if (livros.length > 0){
//     console.log(livros.reverse())
// }else{
//     console.log('NENHUM LIVRO ENCONTRADO')
// }

// Exercicio 2

// const cpfsCadastrados: string[] = [
//     "731.686.190-86",
//     "927.990.600-30",
//     "879.929.560-10",
//     "221.244.270-08",
//     "942.093.460-80",
//     "303.445.130-09",
//     "563.398.460-92"
//   ]
// const cpfDigitado: string = "563.398.460-92"

// if (cpfsCadastrados.includes(cpfDigitado)){
//     console.log('CPF JA CADASTRADO');
    
// }else{
//     console.log('CADASTRO REALIZADO COM SUCESSO');
    
// }


// Exercicio 3

// const agenda = ["Ana", "Beatriz", "Carol", "Daniel", "Eduardo"]
// const cancelamento = "Carol"
// const cancelamentoPacienteIndex = agenda.indexOf(cancelamento)


// if (agenda.includes(cancelamento)){
//     const pacienteCancelado = agenda.splice(cancelamentoPacienteIndex, 1)
//     console.log(agenda)
    
// }else{
//     console.log('PACIENTE NAO AGENDADO');
    
// }


// Exercicio 4

// type TPedidos = {
//     nomeCliente: string
//     nomePrato: string
//     quantidade: number
// }

// const pedidoSolicitado: TPedidos = {
//     nomeCliente: "Thiago",
//     nomePrato: "Feijoada",
//     quantidade: 2,
//   }
// const  pedidos: TPedidos[] = [
//     {
//       nomeCliente: "Amanda",
//       nomePrato: "Arroz",
//       quantidade: 4,
//     },
//     {
//       nomeCliente: "Jacinto",
//       nomePrato: "Macarrão",
//       quantidade: 1,
//     },
//     {
//       nomeCliente: "Guilherme",
//       nomePrato: "Frango assado",
//       quantidade: 2,
//     },
//   ]
// const  tipoDeAtendimento: string = "fila"


// if (tipoDeAtendimento === 'pilha'){
//     pedidos.unshift(pedidoSolicitado)
//     console.log(pedidos)
    
// }else{
//     pedidos.push(pedidoSolicitado)
//     console.log(pedidos)
// }


// Exercicio 5

// type TUsuario = {
//     nome: string
//     email: string
//     senha: string
// }

const usuariosCadastrados  = [
    {
      nome: "Ana",
      email: "ana@gmail.com",
      senha: "123456",
    },
    {
      nome: "Paula",
      email: "p.antunies@al.com",
      senha: "121236",
    },
    {
      nome: "Pedro",
      email: "pedro@gmail.com",
      senha: "9u9rn3nf4",
    },
    {
      nome: "Lucas",
      email: "lc@hotmail.com",
      senha: "revrvretgs",
    },
    {
      nome: "João",
      email: "joao@outlook.com",
      senha: "0in8h834c0",
    },
]
 
const novoUsuario = {
    nome: "Augusta Catarina",
    email: "ana@gmail.com",
    senha: "2251213",
}

let encontrado = false

for(let usuario = 0; usuario < usuariosCadastrados.length; usuario++){
    if(usuariosCadastrados[usuario].email.includes(novoUsuario.email)){
        encontrado = true
        
    }
}

if(encontrado){
    console.log('E-MAIL INVALIDO');
    
}else{
    usuariosCadastrados.push(novoUsuario)
    console.log(usuariosCadastrados)
}



