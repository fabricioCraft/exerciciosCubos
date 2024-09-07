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

// const jogadorA : number[] = [1, 4, 5, 8, 15, 14]

// let count : number = 0
// let media :number = 60

// for(let numeracaoBola = 0; numeracaoBola < jogadorA.length; numeracaoBola++){
//     count += jogadorA[numeracaoBola]

// }

// if(count > media){
//     console.log('JOGADOR A GANHOU')
// }else if (count === media){
//     console.log('EMPATE')
// }else{
//     console.log('JOGADOR B GANHOU')
// }

// Exercicio 6

// const botoesApertados : string[] = ['A1', 'A2', 'E', 'A1', 'A2', 'A2', 'A1', 'A1']

// let countA1 : number = 0
// let countA2 : number = 0

// for(let botao = 0; botao < botoesApertados.length; botao++){
//     if(botoesApertados[botao] === 'A1'){

//     countA1++
//     }
//     if (botoesApertados[botao] === 'A2'){
//         countA2++
//     }

// }

// if (countA1 > countA2){
//     console.log('NERD')
// }else if (countA1 < countA2){
//     console.log('ATLETA')
// }else{
//     console.log('DIVERSIFICADO')
// }

// Exercício 7

// const palavra = "jkknmmnlpppwew";
// const vogais: string[] = ["a", "e", "i", "o", "u"];
// let encontrado: boolean = false;
// for (let letra = 0; letra < palavra.length; letra++) {
//   for (let vogal = 0; vogal < vogais.length; vogal++) {
//     if (vogais[vogal] === palavra[letra]) {
//       encontrado = true;
//       break;
//     }
//   }
// }

// if (encontrado) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// Exercício 8

const notas : number[] = [9, 5, 6, 2, 0]

let nps : number
let notasPromotores : number = 0
let notasDetratores : number = 0
let total : number = 0

for(let nota = 0; nota < notas.length; nota++){
    total ++
    if (notas[nota] === 9 || notas[nota] === 10){
        notasPromotores++
    }
    if(notas[nota] >= 0 && notas[nota] <= 6 ){
        notasDetratores++
    }
}

nps = ((notasPromotores - notasDetratores)/total)*100
console.log(nps + '%')

// console.log(notasPromotores)
// console.log(notasDetratores)
// console.log(total)




