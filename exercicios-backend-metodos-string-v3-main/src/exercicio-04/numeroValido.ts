function solucao(endereco: string): boolean {
  // seu código aqui

  const arrayEndereco = endereco.split(',')

  const usuario: TUsuario = {
      rua: arrayEndereco[0],
      numero: arrayEndereco[1],
      bairro: arrayEndereco[2],
      estado: arrayEndereco[3]
  }
  
  
  const numeroFormatado = usuario.numero.trim()
  const numeroConvertido = Number(numeroFormatado)
  
  if(isNaN(numeroConvertido)){
      return false
  
  }else{
      return true
  }
}

export default solucao;
