type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  // seu código aqui

  let mediaFilme1 = 0
  let mediaFilme2 = 0
  
  for (let nota = 0; nota < filme1.notas.length - 1; nota++){
  
      mediaFilme1 = (Number(filme1.notas[nota]) + Number(filme1.notas[nota + 1]))/2
  }
  
  for (let nota = 0; nota < filme2.notas.length - 1; nota++){
      mediaFilme2 = (Number(filme2.notas[nota]) + Number(filme2.notas[nota + 1]))/2
  }
  
  if (mediaFilme1 > mediaFilme2){
      return(filme1.nome)
  }else if (mediaFilme2 > mediaFilme1){
      return(filme2.nome)
  }else{
      return('EMPATE')
  }
}

export default solucao;
