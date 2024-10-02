type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  // seu código aqui

  if (anuncios.length === 0) {
    return "NAO ENCONTRADO";
  }

  const ordenarAnuncios = anuncios.sort((anuncio1, anuncio2) => {
    if (anuncio1.preco > anuncio2.preco) {
      return 1;
    }

    if (anuncio1.preco < anuncio2.preco) {
      return -1;
    }

    return 0;
  });

  return ordenarAnuncios;
}
export default solucao;
