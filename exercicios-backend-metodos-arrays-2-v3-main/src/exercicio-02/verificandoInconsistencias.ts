function solucao(cpfsCadastrados: string[]): string {
  // seu código aqui

  const planilhaVerificada = cpfsCadastrados.every((cpf) => {
    return cpf.length === 11
  })

  if(planilhaVerificada){
    
      return 'PLANILHA VALIDA';
      
  }
  
  return 'PLANILHA INVALIDA';
    

}

export default solucao;
