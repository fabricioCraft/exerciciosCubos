function solucao(jogadorA: number[]): string {
  // seu código aqui

let count : number = 0
let media :number = 60

for(let numeracaoBola = 0; numeracaoBola < jogadorA.length; numeracaoBola++){
    count += jogadorA[numeracaoBola]

}

if(count > media){
    return('JOGADOR A GANHOU')
}else if (count === media){
    return('EMPATE')
}else{
    return('JOGADOR B GANHOU')
}
}

export default solucao;
