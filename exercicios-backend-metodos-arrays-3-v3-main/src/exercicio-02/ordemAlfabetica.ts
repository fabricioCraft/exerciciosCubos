function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {
  // seu código aqui

  if(ordemAlfabetica === true){
    const ordenarAlunos = listaAlunos.sort((aluno1, aluno2) => {
        return aluno1.localeCompare(aluno2)
    })

    return ordenarAlunos
  }

  return listaAlunos
  
}
export default solucao;
