type TPrato = { nome: string; valor: number; quantidade: number };

function solucao(informacoesPrato: TPrato): number | string {
  // seu código aqui


if (informacoesPrato.nome && informacoesPrato.quantidade > 0){
    return(informacoesPrato.valor )
}else{
    return('PRATO INDISPONIVEL')
}
}

export default solucao;
