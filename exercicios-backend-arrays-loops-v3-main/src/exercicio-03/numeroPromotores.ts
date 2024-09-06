function solucao(notas: number[]): number {
  // seu código aqui

let count = 0

for (let nota = 0; nota < notas.length; nota++){
    if (notas[nota]=== 9 || notas[nota] === 10){
        count++

    }
}
return(count)
}

export default solucao;
