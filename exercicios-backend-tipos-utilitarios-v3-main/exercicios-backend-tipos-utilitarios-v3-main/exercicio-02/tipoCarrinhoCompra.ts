type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type CarrinhoComEndereco = Omit<Carrinho, 'tipoTransacao'> & {
    tipoTransacao: Lowercase<Carrinho['tipoTransacao']>,
    endereco: {
        cep: string
        rua: string
        bairro: string
        cidade: string
        estado: string
    }
}

const cliente: CarrinhoComEndereco = {
    item: {
        nome: 'Notebook',
        descricao: 'Notebook 15',
        valor: 100
    },
    qtd: 1,
    desconto: 0,
    frete: 0,
    tipoTransacao: 'debito',
    cartao: {
        numero: 123456789,
        validade: '01/01',
        nome: 'João',
        cvv: 123
    },
    endereco: {
        cep: '12345-678',
        rua: 'Rua 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        estado: 'Estado 1'
    }
}
