import { Request, Response } from "express"
import bancoDeDados from "../bancoDeDados"


export const apiListaConvidados = (req: Request, resp: Response) => {

    resp.send('API de lista de convidados')
    return
}

export const convidados = (req: Request, res: Response) => {
    const {idadeMaxima} = req.query

    if(!idadeMaxima){
        res.send(bancoDeDados)
        return
    }

    res.send(bancoDeDados.filter((convidado) => {
        return convidado.idade <= Number(idadeMaxima)
    }))

    

}

export const convidado = (req: Request, res: Response)=> {
    const {id} = req.params

    const idConvidado = bancoDeDados.find((convidado ) => {
        return convidado.id === Number(id)
    })

    if(!idConvidado){
        res.send('Convidado não encontrado')
        return
    }

    res.send(idConvidado)
}