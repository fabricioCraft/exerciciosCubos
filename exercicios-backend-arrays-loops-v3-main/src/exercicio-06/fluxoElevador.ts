function solucao(botoesApertados: string[]): string {
  // seu código aqui

let countA1 : number = 0
let countA2 : number = 0

for(let botao = 0; botao < botoesApertados.length; botao++){
    if(botoesApertados[botao] === 'A1'){

    countA1++
    } 
    if (botoesApertados[botao] === 'A2'){
        countA2++
    }
    
}

if (countA1 > countA2){
    return('NERD')
}else if (countA1 < countA2){
    return('ATLETA')
}else{
    return('DIVERSIFICADO')
}
}

export default solucao;
