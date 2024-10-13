export default function resultadoVenda (compra: number, venda: number): string {

    const resultado = venda - compra

    if(resultado > 0){
        return `O valor do lucro é: ${resultado}`
    }

    if(resultado < 0){
        return `O valor do prejuízo é: ${Math.abs(resultado)}`
    }

    return 'Venda a preço de custo'
}
