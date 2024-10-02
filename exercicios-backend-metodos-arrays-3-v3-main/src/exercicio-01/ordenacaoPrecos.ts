type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
  // seu código aqui

  if (filtroPreco === 'crescente'){
    const listaPrecos = precos.sort((preco1, preco2) =>{
        if (preco1 > preco2){
            return 1
        }

        if(preco1 < preco2){
            return -1
        }

        return 0
    })
    return listaPrecos
}

  const listaPrecos = precos.sort((preco1, preco2) =>{
      if (preco1 > preco2){
          return -1
      }

      if (preco1 < preco2){
          return 1
      }

      return 0
  })
  return listaPrecos
  
}
export default solucao;
