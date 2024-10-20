import { NextFunction, Request, Response } from "express"


export const validarFiltro = (req: Request, resp: Response, next: NextFunction) => {
    const {idadeMaxima} = req.query
    const idade = Number(idadeMaxima)
    if(isNaN(idade)){
        resp.send('Idade máxima inválida')
    }

    next()
}