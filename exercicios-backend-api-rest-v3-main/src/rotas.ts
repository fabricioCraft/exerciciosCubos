import { Router } from 'express'
import { cadastrarExame, deletarExame, editarExame, listarExames, testeExame } from './controladores/exame'


const rotas = Router()

rotas.get('/', testeExame)

rotas.post('/exames',cadastrarExame)
rotas.get('/exames', listarExames)
rotas.put('/exames/:id', editarExame)
rotas.delete('/exames/:id', deletarExame)
export default rotas
