import {checarSenha} from '../src/checagem-de-senha' 

describe ('Checagem de Senha', () => {

    it('Deve chegar se a senha é válida', () => {
        const senha = '12358967'
        expect(checarSenha(senha)).toBe('SENHA VALIDA')
    })
    it('Deve chegar se a senha é válida', () => {
        const senha = '1234'
        expect(checarSenha(senha)).toBe('SENHA VALIDA')
    })
    it('Deve chegar se a senha é inválida', () => {
        const senha = '123'
        expect(checarSenha(senha)).toBe('SENHA INVÁLIDA')
    })
    it('Deve chegar se a senha é inválida', () => {
        const senha = '123A'
        expect(checarSenha(senha)).toBe('SENHA INVÁLIDA')
    })
    it('Deve chegar se a senha é inválida', () => {
        const senha = '123b'
        expect(checarSenha(senha)).toBe('SENHA INVÁLIDA')
    })
    it('Deve chegar se a senha é inválida', () => {
        const senha = '123565896594ec'
        expect(checarSenha(senha)).toBe('SENHA INVÁLIDA')
    })
    it('Deve chegar se a senha é inválida', () => {
        const senha = 'ab1235456489lo'
        expect(checarSenha(senha)).toBe('SENHA INVÁLIDA')
    })
    
})