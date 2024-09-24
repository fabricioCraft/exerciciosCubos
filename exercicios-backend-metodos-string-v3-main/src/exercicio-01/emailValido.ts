function solucao(email: string): string {
  // seu código aqui

const emailValido = email.includes('@')

if(emailValido){
    return 'VALIDO'
}else{
    return 'INVALIDO'
}
}
export default solucao;
