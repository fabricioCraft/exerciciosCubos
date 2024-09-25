function solucao(cpf: string): string {
  // seu código aqui

const indexTraco = cpf.indexOf("-")

if (cpf.slice(0, indexTraco).length === 9 && cpf.slice(-2).length === 2) {
    return 'CPF VALIDO'
} else {
    return 'CPF INVALIDO'
}
}

export default solucao;
