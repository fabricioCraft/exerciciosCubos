// IMPLEMENTE AQUI A SUA FUNÇÃO

type TResultado = string
type TConcorrentes = {
    nome: string
    numeroCartela: number
}
type TPremiado = (numeroSorteado: number, pessoasConcorrendo: TConcorrentes[]) => string  

const verificarPremiado = (numeroSorteado: number, pessoasConcorrendo: TConcorrentes[]): string =>  {


let resultado: TResultado = ''

for(let numero = 0; numero < pessoasConcorrendo.length; numero++){
    
    let pessoaSorteada = pessoasConcorrendo[numero] 

    if(numeroSorteado === pessoaSorteada.numeroCartela){
        resultado = pessoaSorteada.nome
        break
    }else{
        resultado = 'undefined'
    }
    
}

return(resultado)

}

export default verificarPremiado;
