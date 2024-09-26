function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  // seu código aqui

  if (cpfsCadastrados.includes(cpfDigitado)){
    return 'CPF JA CADASTRADO'
    
  }else{
    return 'CADASTRO REALIZADO COM SUCESSO'
    
  }
}
export default solucao;
