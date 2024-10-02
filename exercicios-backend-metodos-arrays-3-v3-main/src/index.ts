// Exercicio

// const precos: number[] = [40, 35, 9, 402, 44.1];
// const filtroPreco: string = "crescente";

// const filtrarProdutos = (precos: number[], filtroPreco: string): number[] => {

//     if (filtroPreco === 'crescente'){
//         const listaPrecos = precos.sort((preco1, preco2) =>{
//             if (preco1 > preco2){
//                 return 1
//             }

//             if(preco1 < preco2){
//                 return -1
//             }

//             return 0
//         })
//         return listaPrecos
//     }

//     const listaPrecos = precos.sort((preco1, preco2) =>{
//         if (preco1 > preco2){
//             return -1
//         }

//         if (preco1 < preco2){
//             return 1
//         }

//         return 0
//     })
//     return listaPrecos
// }

// console.log(filtrarProdutos(precos, filtroPreco))

// Exercicio 2

// const listaAlunos: string[] = ["Lucas", "Camila", "Taís", "Carla", "Ana"];
// const ordemAlfabetica: boolean = true;

// const mostrarAlunos = (listaAlunos: string[], ordemAlfabetica: boolean) => {

//     if(ordemAlfabetica === true){
//         const ordenarAlunos = listaAlunos.sort((aluno1, aluno2) => {
//             return aluno1.localeCompare(aluno2)
//         })

//         return ordenarAlunos
//     }

//     return listaAlunos

// }

// console.log(mostrarAlunos(listaAlunos, ordemAlfabetica));


// Exercicio 3

type TImovel = {
    titulo: string
    descricao: string
    preco: number
}

const anuncios: TImovel[] = [
    {
      titulo: "Apartamento Reformado",
      descricao: "Apartamento confortável e seguro",
      preco: 3000,
    },
    {
      titulo: "Casa Branca",
      descricao: "Casa com 3 quartos e 2 banheiros",
      preco: 1500.67,
    },
    {
      titulo: "Apartamento com piscina",
      descricao: "Apartamento confortável, com piscina, sauna e churrasqueira",
      preco: 5600,
    },
    {
      titulo: "Casa com 4 quartos",
      descricao: "A casa possui 4 quartos, 2 banheiros e uma sala de estar",
      preco: 2900,
    },
    {
      titulo: "Kitnet",
      descricao: "Kitnet aconchegante, com lareira e banheira privada",
      preco: 4325,
    },
  ];


  const ordenarImoveis = (anuncios: TImovel[]): TImovel[] | string => {

    if(anuncios.length === 0){
        return 'NAO ENCONTRADO'
    }

    const ordenarAnuncios = anuncios.sort((anuncio1, anuncio2) => {

        if(anuncio1.preco > anuncio2.preco){
            return 1
        }

        if(anuncio1.preco < anuncio2.preco){
            return-1
        }

        return 0
    })

    return ordenarAnuncios


  }

  console.log(ordenarImoveis(anuncios));
  