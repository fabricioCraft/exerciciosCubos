import { Request, Response } from "express"
import fs from 'fs/promises'


const listarLendas = async (req: Request, res: Response) => {

    const bancoDeDados = await fs.readFile('./bancoDeDados.json')

    const resultado = JSON.parse(bancoDeDados.toString())

    res.status(200).json(resultado.lendas)
    return
    
}

export default listarLendas