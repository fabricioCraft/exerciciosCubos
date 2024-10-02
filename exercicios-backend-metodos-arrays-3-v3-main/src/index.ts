// Exercicio

const precos: number[] = [40, 35, 9, 402, 44.1];
const filtroPreco: string = "crescente";

const filtrarProdutos = (precos: number[], filtroPreco: string): number[] => {

    if (filtroPreco === 'crescente'){
        const listaPrecos = precos.sort((preco1, preco2) =>{
            if (preco1 > preco2){
                return 1
            }

            if(preco1 < preco2){
                return -1
            }

            return 0
        })
        return listaPrecos
    }

    const listaPrecos = precos.sort((preco1, preco2) =>{
        if (preco1 > preco2){
            return -1
        }

        if (preco1 < preco2){
            return 1
        }

        return 0
    })
    return listaPrecos
}

console.log(filtrarProdutos(precos, filtroPreco))