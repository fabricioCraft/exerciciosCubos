import 'dotenv/config'
import express from 'express'
import listarLendas from './Controladores/ListarLendas'
import verificarCamposObrigatorios from './Intermediarios/VerificarCamposObrigatorios'
import cadastrarLendas from './Controladores/CadastrarLendas'


const app = express()

app.use(express.json())

const port = process.env.PORT

app.get('/lendas', listarLendas )

app.post('/lendas', verificarCamposObrigatorios, cadastrarLendas)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})