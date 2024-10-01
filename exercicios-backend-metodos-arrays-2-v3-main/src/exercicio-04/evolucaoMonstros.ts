// IMPLEMENTE AQUI A SUA FUNÇÃO
type TMonstro = {
  nome: string;
  forca: number;
  agilidade: number;
  experiencia: number;
};
function solucao(monstros: TMonstro[]): TMonstro[] {
  // seu código aqui

  const monstroGanhaPontos = monstros.map((monstro) => {

    return {
        ...monstro,
        experiencia: monstro.experiencia + 10

    }
  })

  return monstroGanhaPontos
}
export default solucao;
