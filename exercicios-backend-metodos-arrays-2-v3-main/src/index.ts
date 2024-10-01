// Exercício 1

// const livros = [
//     "As Branquelas",
//     "Lagoa Azul",
//     "Mágico de Oz",
//     "Matilda",
//     "O Resgate do Soldado Ryan",
//   ];
// const nomeDoLivro= "Matilda";

// const livroEncontrado = livros.findIndex((livro) => {
//     return livro === nomeDoLivro
// })

// if(livroEncontrado !== -1){
//     console.log(`O LIVRO ESTA NA POSICAO ${livroEncontrado}`);
        
// }else{
//     console.log('NENHUM LIVRO ENCONTRADO');
    
// }

// Exercicio 2

// const cpfsCadastrados: string[] = [
//     "73168619086",
//     "92799060030",
//     "87992956010",
//     "2212442700",
//     "94209346080",
//     "30344513009",
//   ];

//   const planilhaVerificada = cpfsCadastrados.every((cpf) => {
//     return cpf.length === 11
//   })

// if(planilhaVerificada){
//     console.log('PLANILHA VALIDA');
    
// }else{
//     console.log('PLANILHA INVALIDA');
    
// }



// Exercicio 3

// const tipoItensCarrinho: string[] = [
//     "comida",
//     "comida",
//     "produtos gerais",
//     "bebida sem alcool",
//     "bebida sem alcool",
//     "produtos gerais",
//   ];
  
// const idadeCliente: number = 16;

// const procurarBebidaAlcoolica = tipoItensCarrinho.some((item) => {

//     return item === 'bebida com alcool' && idadeCliente < 18
// })


// if(procurarBebidaAlcoolica){

//     console.log('COMPRA BLOQUEADA');
    
// }else{

//     console.log('COMPRA EFETUADA');
// }


// Exercicio 4

type TMonstro = {
  nome: string
  forca: number
  agilidade: number
  experiencia: number
}

const monstros: TMonstro[] = [
    {
      nome: "Gárgula",
      forca: 40,
      agilidade: 15,
      experiencia: 1,
    },
    {
      nome: "Kratos",
      forca: 50,
      agilidade: 5,
      experiencia: 11,
    },
    {
      nome: "Saci",
      forca: 2,
      agilidade: 170,
      experiencia: 70,
    },
  ];


  const monstroGanhaPontos = monstros.map((monstro) => {

    return {
        ...monstro,
        experiencia: monstro.experiencia + 10

    }
  })

  console.log(monstroGanhaPontos)