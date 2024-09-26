function solucao(agenda: string[], cancelamento: string): string | string[] {
  // seu código aqui

  const cancelamentoPacienteIndex = agenda.indexOf(cancelamento)


  if (agenda.includes(cancelamento)){
      const pacienteCancelado = agenda.splice(cancelamentoPacienteIndex, 1)
      return agenda
      
  }else{
      return 'PACIENTE NAO AGENDADO'
      
  }
}
export default solucao;
