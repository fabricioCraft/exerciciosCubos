function solucao(rank: string[]): string {
  // seu código aqui
 
  const melhorLutador = rank[0]
  const segundoMelhor = rank[1]
  const terceiroMelhor = rank[2]
  
  return(melhorLutador + ', ' + segundoMelhor + ', ' + terceiroMelhor)
}

export default solucao;
