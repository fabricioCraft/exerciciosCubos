export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  // seu código aqui

  const valorEsperado: number = marcacaoRoleta * precoPassagem;

  if (valorEsperado === quantidadeCaixa) {
    return "TUDO CERTO";
  } else if (valorEsperado < quantidadeCaixa) {
    return "DINHEIRO SOBRANDO";
  } else {
    return "DINHEIRO FALTANDO";
  }
}
