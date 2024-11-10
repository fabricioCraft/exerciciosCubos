import { Request, Response } from "express"
import fs from 'fs/promises'

const cadastrarLendas =  async (req: Request, res: Response) => {

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
    return

}

export default cadastrarLendas