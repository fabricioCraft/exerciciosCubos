// Exercicio 1

//const olhosNasLaterais : boolean = true

//if (olhosNasLaterais){
//    console.log('PRESA')
//}else{
//    console.log('PREDADOR')
//}

// Exercicio 2

//const monstro1 = 34
//const monstro2 = 55

//if(monstro1 > monstro2){
//    console.log('JOGADOR 1 GANHOU')

//}else if(monstro1 < monstro2){
//    console.log('JOGADOR 2 GANHOU')
//}else{
//    console.log('EMPATE')
//}


// Exercicio 3

//const ano = 1789

//if(ano < 476){
//    console.log('ANTIGA')
//}else if(ano <= 1453){
//    console.log('MEDIA')
//}else if(ano <=// 1789){
//    console.log('MODERNA')
//}else{
//    console.log('CONTEMPORANEA')
//}

// Exercio 4

//const nota1 :number = 10
//const nota2 : number = 8
//const diferencaNotas = nota1 - nota2

//if(diferencaNotas <// 1.5){
//    console.log('DUPLA VALIDA')
//}else{
//    console.log('DUPLA INVALIDA')
//}


// Exercicio 5

//let cerveja : string= 'trigo'
//let temperatura :number = 4

//if (cerveja === 'pilsen' && (temperatura >= 0 && temperatura <= 4)){
//    console.log('TEMPERATURA IDEAL')
//} else if (cerveja === 'trigo' && (temperatura >= 4 && temperatura //<= 6)){
//    console.log('TEMPERATURA IDEAL')
//} else if(cerveja === 'ipa' && (temperatura >= 7 && temperatura //<=10)){
//    console.log('TEMPERATURA IDEAL')
//} else{
//    console.log('TEMPERATURA NAO IDEAL')
//}

// Exercicio 6

//const marcacaoRoleta : number = 45
//const quantidadeCaixa : number = 256
//const precoPassagem : number = 5.70

//const valorEsperado : number = (marcacaoRoleta) *(precoPassagem)


//if(valorEsperado === quantidadeCaixa){
//    console.log('TUDO CERTO')
//} else if(valorEsperado < quantidadeCaixa){
//    console.log('DINHEIRO SOBRANDO')
//} else{
//    console.log('DINHEIRO FALTANDO')
//}


// Exercicio 7

//const media : number = 59.5
//const frequencia : number = 75
//const projetoFinal : number = 86

//if((media >= 60 && frequencia >= 75 && projetoFinal > 0) || (media < //60 && frequencia >= 75 && projetoFinal >= 85)){
//    console.log('APROVADO')
//}else{
//    console.log('REPROVADO')
//}

// Exercicio 8

const pontosA : number = 30
const pontosB : number = 30

if(pontosA >= 25 && (pontosA - pontosB) >= 2){
    console.log('TIME A VENCEU O SET')
}else if((pontosA > pontosB)){
    console.log('TIME A VENCENDO')
}else if(pontosB >= 25 && (pontosB - pontosA) >= 2){
    console.log('TIME B VENCEU O SET')
}else if((pontosB > pontosA)){
    console.log('TIME B VENCENDO')
}else{
    console.log('JOGO EMPATADO')
}
