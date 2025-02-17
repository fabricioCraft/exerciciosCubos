import { Router } from 'express'
import { cadastrarExame, listarExames, testeExame } from './controladores/exame'


const rotas = Router()

rotas.get('/', testeExame)

rotas.post('/exames',cadastrarExame)
rotas.get('/exames', listarExames)

export default rotas
