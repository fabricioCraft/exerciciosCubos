import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";


export const testeExame = (req: Request, res: Response) => {
    res.status(200).json({mensagem: 'API de exames de direção'})
    return
}

export const cadastrarExame = (req: Request, res: Response) => {

    const {
        id,
        examinador, 
        candidato, 
        quantidadeEliminatorias, 
        quantidadeGraves, 
        quantidadeMedias, 
        quantidadeLeves, 
        aprovado
    } = req.body

    const novoExame = {
        id,
        examinador,
        candidato,
        quantidadeEliminatorias,
        quantidadeGraves,
        quantidadeMedias,
        quantidadeLeves,
        aprovado
    }

    bancoDeDados.exames.push(novoExame)

    res.status(201).json(novoExame)
    return
}