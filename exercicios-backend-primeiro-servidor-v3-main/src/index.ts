import 'dotenv/config'
import express from 'express'


const app = express()

const num_1 = Number(process.env.Num_1)
const num_2 = Number(process.env.Num_2)

app.get('/somar', (req, res) => {

    const soma = num_1 + num_2
    res.send(soma.toString())
   
})

app.get('/subtrair', (req, res) => {

    const subtracao = num_1 - num_2
    res.send(subtracao.toString())
   
})

app.get('/multiplicar', (req, res) => {

    const multiplicacao = num_1 * num_2
    res.send(multiplicacao.toString())
   
})

app.get('/dividir', (req, res) => {

    const divisao = num_1 / num_2
    res.send(divisao.toString())
   
})

app.listen(3000)

