// Exercicio 1

// const rank: string[] = [
//   "Ana",
//   "Beatriz",
//   "Camila",
//   "Jorgiane",
//   "Maria",
//   "Carla",
// ];

// let resultado = " ";

// for (let i = 0; i < 3; i++) {
//   resultado += `"${rank[i]}"`;
//   if (i < 2) {
//     resultado += ", ";
//   }
// }
// console.log(resultado);


// Exercicio 2

// const ranks : string[] = ['Ana', 'Beatriz', 'Camila', 'Jorgiane', 'Maria', 'Carla']


// console.log(ranks[ranks.length - 1])

// Exercício 3

// const notas : number[] = [9, 5, 6, 2, 0, 1]

// let count = 0

// for (let nota = 0; nota < notas.length; nota++){
//     if (notas[nota]=== 9 || notas[nota] === 10){
//         count++

//     }
// }
// console.log(count)

// Exercício 4

// const frutaColetada  : string = 'BANANA'
// const esteira : string[] = ['UVA', 'ACEROLA', 'MANGA', 'PERA', 'CAJU', 'BANANA', 'UVA', 'LARANJA', 'MARACUJA', 'MELANCIA']

// let count : number = 0

// for (let fruta = 0; fruta < esteira.length; fruta++){
//     if (esteira[fruta] === frutaColetada){
//         count++
//     }
// }

// console.log(count)

// Exercício 5

const jogadorA : number[] = [1, 4, 5, 8, 15, 14]

let count : number = 0
let media :number = 60

for(let numeracaoBola = 0; numeracaoBola < jogadorA.length; numeracaoBola++){
    count += jogadorA[numeracaoBola]

}

if(count > media){
    console.log('JOGADOR A GANHOU')
}else if (count === media){
    console.log('EMPATE')
}else{
    console.log('JOGADOR B GANHOU')
}

