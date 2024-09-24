function solucao(comentario: string): boolean {
  // seu código aqui

const comnetarioFormatado: string = comentario.toLowerCase() 

if(comnetarioFormatado.includes('covid') || comnetarioFormatado.includes('pandemia')){
    return false
}else{
    return true
}
}
export default solucao;
