import {validarUsuario} from '../src/validacao-cadastro'

describe('Validação de Cadastro', () => {

    it('Deve analisar se todos os itens estão preenchidos', () => {

        const dados = {
            nome: 'Fabrício Silva',
            email: 'fabricio@email.com',
            senha: '1568975'
        }

        expect(validarUsuario(dados)).toBe(true)
    })
    
    it('Deve analisar se o nome não está preenchido', () => {

        const dados = {
            nome: '',
            email: 'fabricio@email.com',
            senha: '1568975'
        }

        expect(validarUsuario(dados)).toBe('Todos os campos são obrigatórios')
    })
    
    it('Deve analisar se o email não está preenchido', () => {

        const dados = {
            nome: 'Fabrício',
            email: '',
            senha: '1568975'
        }

        expect(validarUsuario(dados)).toBe('Todos os campos são obrigatórios')
    })
    
    it('Deve analisar se a senha não está preenchida', () => {

        const dados = {
            nome: 'Fabrício Nascimento',
            email: 'fabricio@email.com',
            senha: ''
        }

        expect(validarUsuario(dados)).toBe('Todos os campos são obrigatórios')
    })
    
    it('Deve analisar se não existe dados preenchido', () => {

        const dados = {
            nome: '',
            email: '',
            senha: ''
        }

        expect(validarUsuario(dados)).toBe('Todos os campos são obrigatórios')
    })
} )