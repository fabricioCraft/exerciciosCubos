// IMPLEMENTE AQUI A SUA FUNÇÃO

type TNovoSaldo = (saldoAtual: number, valor: number) => number 

function calcularNovoSaldo (saldoAtual: number, valor: number): number{

    return saldoAtual + valor

}


export default calcularNovoSaldo;
