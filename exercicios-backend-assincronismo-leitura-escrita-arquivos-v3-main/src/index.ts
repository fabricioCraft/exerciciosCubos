import 'dotenv/config'
import express from 'express'
import fs from 'fs/promises'
import { stringify } from 'querystring'
import { json } from 'stream/consumers'


const app = express()

app.use(express.json())

const port = process.env.PORT

app.get('/lendas', async (req, res) => {

    const bancoDeDados = await fs.readFile('./bancoDeDados.json')

    const resultado = JSON.parse(bancoDeDados.toString())

    res.status(200).json(resultado.lendas)
    
})

app.post('/lendas', async (req, res) => {

    const { titulo, origem, tipo, descricao } = req.body

    const bancoDeDados = await fs.readFile('./bancoDeDados.json')

    const resultado = JSON.parse(bancoDeDados.toString())

    const novaLenda = {
        id: resultado.proximoId,
        titulo,
        origem,
        tipo,
        descricao
    }

    resultado.lendas.push(novaLenda)

    

    await fs.writeFile('./bancoDeDados.json', JSON.stringify(resultado, null, 2))

    res.status(201).json(novaLenda)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})