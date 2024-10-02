type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  // seu código aqui

  
  let encontrado = false
   
  for(let i =0; i < times.length; i++){
      if(times[i].pais === paisFiltrado){
          encontrado = true
      }
  }

  if(!encontrado){
      return 'NAO ENCONTRADO'
  }

  const teamsByCountry = times.sort((team1, team2) => {

      if(team1.quantidadeTitulos > team2.quantidadeTitulos){
          return -1
      }

      if(team1.quantidadeTitulos < team2.quantidadeTitulos){
          return 1
      }

      return 0
  })

  return teamsByCountry.filter((team) => team.pais === paisFiltrado)
  
}
export default solucao;
