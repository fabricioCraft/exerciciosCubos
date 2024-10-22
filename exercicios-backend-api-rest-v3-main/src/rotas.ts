import { Router } from 'express'
import { testeExame } from './controladores/exame'


const rotas = Router()

rotas.get('/', testeExame)

export default rotas
