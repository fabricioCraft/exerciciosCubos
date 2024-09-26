function solucao(livros: string[]): string | string[] {
  // seu código aqui

  if (livros.length > 0){
    return livros.reverse()
  }else{
    return 'NENHUM LIVRO ENCONTRADO'
  }

}
export default solucao;
