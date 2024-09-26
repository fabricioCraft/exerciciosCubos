// IMPLEMENTE AQUI A SUA FUNÇÃO
type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(
  pedidoSolicitado: TPedido,
  pedidos: TPedido[],
  tipoDeAtendimento: TAtendimento
): TPedido[] {
  // seu código aqui

  if (tipoDeAtendimento === 'pilha'){
    pedidos.unshift(pedidoSolicitado)
    return pedidos
    
  }else{
    pedidos.push(pedidoSolicitado)
    return pedidos
  }
}
export default solucao;
