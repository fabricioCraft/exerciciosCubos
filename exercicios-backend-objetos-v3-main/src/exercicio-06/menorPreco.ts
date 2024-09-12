type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
  // seu código aqui

  // Primeiro passo: fixar um número
let menorPreco = produtosEncontrados[0]


// Segundo passo: percorrer a lista de produtos encontrados até a penúltimo posição
for (let valor = 1; valor < produtosEncontrados.length; valor++){

// Terceiro passo: comparar os demais números com o número fixado
    if(produtosEncontrados[valor].preco < menorPreco.preco ){

// Quarto passo: guardar o menor valor em uma variável e atualizar para o menor valor
        menorPreco = produtosEncontrados[valor] 
    }
}

return(menorPreco.loja)


 
}

export default solucao;
