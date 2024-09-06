export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  // seu código aqui


const diferencaNotas : number= notaAlunoA   - notaAlunoB 

if(diferencaNotas < 1.5){
    return('DUPLA VALIDA')
}else{
    return('DUPLA INVALIDA')
}
}
