function solucao(frutaColetada: string, esteira: string[]): number {
  // seu código aqui

let count : number = 0

for (let fruta = 0; fruta < esteira.length; fruta++){
    if (esteira[fruta] === frutaColetada){
        count++
    }
}

return(count)
}

export default solucao;
