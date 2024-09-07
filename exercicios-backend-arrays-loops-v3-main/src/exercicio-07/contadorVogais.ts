function solucao(palavra: string): boolean {
  // seu código aqui

const vogais: string[] = ["a", "e", "i", "o", "u"];
let encontrado: boolean = false;

for (let letra = 0; letra < palavra.length; letra++) {
  for (let vogal = 0; vogal < vogais.length; vogal++) {
    if (vogais[vogal] === palavra[letra]) {
      encontrado = true;
      break;
    }
  }
}

if (encontrado) {
  return(true);
} else {
  return(false);
}
}

export default solucao;
