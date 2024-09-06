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

const notas : number[] = [9, 5, 6, 2, 0, 1]

let count = 0

for (let nota = 0; nota < notas.length; nota++){
    if (notas[nota]=== 9 || notas[nota] === 10){
        count++

    }
}
console.log(count)