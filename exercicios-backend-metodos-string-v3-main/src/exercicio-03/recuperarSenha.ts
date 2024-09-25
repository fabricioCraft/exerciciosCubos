function solucao(numeroCadastrado: string): string {
  // seu código aqui

const numeroFormatado: string = numeroCadastrado.substring(0, 2).padEnd(9, '*') + numeroCadastrado.slice(-2)

return numeroFormatado

}

export default solucao;
