function solucao(tipoItensCarrinho: string[], idadeCliente: number): string {
  // seu código aqui

  const procurarBebidaAlcoolica = tipoItensCarrinho.some((item) => {

    return item === 'bebida com alcool' && idadeCliente < 18
})


if(procurarBebidaAlcoolica){

    return 'COMPRA BLOQUEADA';
    
}else{

    return 'COMPRA EFETUADA';
}
}
export default solucao;
