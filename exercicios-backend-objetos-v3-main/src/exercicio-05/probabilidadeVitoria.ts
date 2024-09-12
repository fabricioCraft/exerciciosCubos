type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  // seu código aqui


let soma = 0
let total = 0
let media = 0

for (let probabilidade = 0; probabilidade < dados.probabilidades.length; probabilidade++){

  soma += dados.probabilidades[probabilidade]
  total = dados.probabilidades.length
  media = soma / total
}

if (dados.probabilidades.length > 0){
  return(media)
}else{
  return('DADOS INSUFICIENTES')
}
}

export default solucao;
