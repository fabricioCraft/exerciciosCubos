function solucao(notas: number[]): number {
  // seu código aqui

  let nps: number;
  let notasPromotores: number = 0;
  let notasDetratores: number = 0;
  let total: number = 0;

  for (let nota = 0; nota < notas.length; nota++) {
    total++;
    if (notas[nota] === 9 || notas[nota] === 10) {
      notasPromotores++;
    }
    if (notas[nota] >= 0 && notas[nota] <= 6) {
      notasDetratores++;
    }
  }

  nps = ((notasPromotores - notasDetratores) / total) * 100;
  
  return(nps);
}

export default solucao;
