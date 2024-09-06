export default function solucao(
  media: number,
  frequencia: number,
  projetoFinal: number
): string {
  // seu código aqui

if((media >= 60 && frequencia >= 75 && projetoFinal > 0) || (media < 60 && frequencia >= 75 && projetoFinal >= 85)){
    return('APROVADO')
}else{
    return('REPROVADO')
}
}
