function solucao(rank: string[]): string {
  // seu código aqui
 
  let resultado = " ";
  
  for (let i = 0; i < 3; i++) {
    resultado += `"${rank[i]}"`;
    if (i < 2) {
      resultado += ", ";
    }
  }
  return(resultado);
}

export default solucao;
