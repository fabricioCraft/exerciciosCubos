// IMPLEMENTE AQUI A SUA FUNÇÃO

type TValidade = (valorLido: number, valoresValidos: number[]) => boolean

function verificarValidade(valorLido: number, valoresValidos: number[]): boolean{


let resultado = false

// console.log(valoresValidos[0])

// Percorre todo o array da vairável valoresValidos
for(let moeda = 0; moeda < valoresValidos.length; moeda++){
    //Verifica se a variável valorLido é igual a cada posição dentro do array da variável valoresValidos
    if(valorLido === valoresValidos[moeda]){
        resultado = true
        break
    }

}

return resultado
}


export default verificarValidade;

