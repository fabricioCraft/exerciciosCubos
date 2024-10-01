// IMPLEMENTE AQUI A SUA FUNÇÃO
type TImovel = {
  titulo: string;
  descricao: string;
  preco: number;
};
function solucao(anuncios: TImovel[], precoMaximo: number): TImovel[] | string {
  // seu código aqui

  const anunciosFiltradosComPrecoMaximo = anuncios.filter((anuncio) => {

    return anuncio.preco <= precoMaximo
  })
  
  if(anunciosFiltradosComPrecoMaximo.length > 0){
  
    return anunciosFiltradosComPrecoMaximo;
    
  }
  
  return 'NAO ENCONTRADO';
  
  

}
export default solucao;
