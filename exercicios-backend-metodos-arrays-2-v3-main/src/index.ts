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

const cpfsCadastrados: string[] = [
    "73168619086",
    "92799060030",
    "87992956010",
    "2212442700",
    "94209346080",
    "30344513009",
  ];

  const planilhaVerificada = cpfsCadastrados.every((cpf) => {
    return cpf.length === 11
  })

if(planilhaVerificada){
    console.log('PLANILHA VALIDA');
    
}else{
    console.log('PLANILHA INVALIDA');
    
}

