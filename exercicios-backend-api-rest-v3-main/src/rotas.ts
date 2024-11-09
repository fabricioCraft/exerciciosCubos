import { Router } from 'express'
import { cadastrarExame, testeExame } from './controladores/exame'


const rotas = Router()

rotas.get('/', testeExame)

rotas.post('/exames',cadastrarExame)

export default rotas
