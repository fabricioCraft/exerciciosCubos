export default function solucao(monstro1: number, monstro2: number): string {
  // seu código aqui

if(monstro1 > monstro2){
    return('JOGADOR 1 GANHOU')

}else if(monstro1 < monstro2){
    return('JOGADOR 2 GANHOU')
}else{
    return('EMPATE')
}
}
