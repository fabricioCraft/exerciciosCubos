function solucao(livros: string[], livroProcurado: string): string {
  // seu código aqui

  const livroEncontrado = livros.findIndex((livro) => {

    return livro === livroProcurado
  })

  if(livroEncontrado !== -1){

    return `O LIVRO ESTA NA POSICAO ${livroEncontrado + 1}`
  }

  return 'NENHUM LIVRO ENCONTRADO'

}


export default solucao;
