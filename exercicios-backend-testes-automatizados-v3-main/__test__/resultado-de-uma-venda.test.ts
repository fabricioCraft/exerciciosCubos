import resultadoVenda from '../src/resultado-de-uma-venda'

describe ('Teste de resultado de uma venda', () => {
    test('Deve verificar se houve prejuízo', () => {
        const compra = 1000
        const venda = 0
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do prejuízo é: ${Math.abs(resultado)}`)
    })

    
    test('Deve verificar se houve prejuízo', () => {
        const compra = 500
        const venda = 400
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do prejuízo é: ${Math.abs(resultado)}`)
    })

    
    test('Deve verificar se houve prejuizo', () => {
        const compra = 39582
        const venda = 39581
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do prejuízo é: ${Math.abs(resultado)}`)
    })

    
    test('Deve verificar se houve lucro', () => {
        const compra = 1000
        const venda = 1001
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do lucro é: ${Math.abs(resultado)}`)
    })

    
    test('Deve verificar se houve lucro', () => {
        const compra = 5000
        const venda = 6000
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do lucro é: ${Math.abs(resultado)}`)
    })

    test('Deve verificar se houve lucro', () => {
        const compra = 50000
        const venda = 85000
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`O valor do lucro é: ${Math.abs(resultado)}`)
    })

    test('Deve verificar se atingiu o ponto de equilíbrio', () => {
        const compra = 5000
        const venda = 5000
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`Venda a preço de custo`)
    })

    
    test('Deve verificar se atingiu o ponto de equilíbrio', () => {
        const compra = 0
        const venda = 0
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`Venda a preço de custo`)
    })

    
    test('Deve verificar se atingiu o ponto de equilíbrio', () => {
        const compra = 100000000
        const venda = 100000000
        const resultado = venda - compra
        expect(resultadoVenda(compra, venda)).toBe(`Venda a preço de custo`)
    })
})