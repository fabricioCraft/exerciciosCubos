import { Request, Response } from "express";
import bancoDeDados, { TExame } from "../../bancoDeDados";
import {v4 as uuidv4 } from "uuid";



export const testeExame = (req: Request, res: Response) => {
    res.status(200).json({mensagem: 'API de exames de direção'})
    return
}

export const cadastrarExame = (req: Request, res: Response) => {

    const {
        examinador, 
        candidato, 
        quantidade_eliminatorias, 
        quantidade_graves, 
        quantidade_medias, 
        quantidade_leves
    } = req.body

    if(!examinador == undefined || !examinador == null || 
        !candidato == undefined || !candidato == null || 
        !quantidade_eliminatorias == undefined || !quantidade_eliminatorias == null || 
        !quantidade_graves == undefined || !quantidade_graves == null || 
        !quantidade_medias == undefined || !quantidade_medias == null || 
        !quantidade_leves == undefined || !quantidade_leves == null) {
        res.status(400).json({mensagem: 'Todos os campos devem ser preenchidos'})
        return
    }


    let aprovado = true

    const faltas = {
        quantidade_leves: quantidade_leves*1,
        quantidade_medias: quantidade_medias*2,
        quantidade_graves: quantidade_graves*3,
    }

    if(quantidade_eliminatorias > 0 || (faltas.quantidade_leves + faltas.quantidade_medias +faltas.quantidade_graves) > 3 ){
        aprovado = false

    }




    const novoExame: TExame = {
        id: uuidv4(),
        examinador,
        candidato,
        quantidadeEliminatorias: quantidade_eliminatorias,
        quantidadeGraves: quantidade_graves,
        quantidadeMedias: quantidade_medias,
        quantidadeLeves: quantidade_leves,
        aprovado
        
    }

    bancoDeDados.exames.push(novoExame)


    res.status(201).json(novoExame)
    return
}

export const listarExames = (req: Request, res: Response) => {

    if(req.query.aprovado){
        const listaAprovados = bancoDeDados.exames.filter((exame) => exame.aprovado === true)

        res.status(200).json(listaAprovados)
        return
        
    }

    res.status(200).json(bancoDeDados.exames)
    return
}

export const editarExame = (req: Request, res: Response) => {
    const {id} = req.params

    const {
        examinador, 
        candidato, 
        quantidade_eliminatorias, 
        quantidade_graves, 
        quantidade_medias, 
        quantidade_leves
    } = req.body

    
    if(!examinador|| 
        !candidato|| 
        !quantidade_eliminatorias|| 
        !quantidade_graves|| 
        !quantidade_medias|| 
        !quantidade_leves) {

        res.status(404).json({mensagem: 'Todos os campos devem ser preenchidos'})
        return
    }

    const exame = bancoDeDados.exames.find((exame) => {
        return exame.id === id
    })

    if(!exame){
        res.status(404).json({mensagem: 'Id não encontrado'})
        return
    }


    exame.examinador = examinador
    exame.candidato = candidato
    exame.quantidadeEliminatorias = quantidade_eliminatorias
    exame.quantidadeGraves = quantidade_graves
    exame.quantidadeMedias = quantidade_medias
    exame.quantidadeLeves = quantidade_leves




    res.status(204).send()
    return

}

export const deletarExame = (req: Request, res: Response) => {

    const { id } =req.params

    const exameIndex = bancoDeDados.exames.findIndex((exame) => {
        return exame.id === id
    })

    if(exameIndex === -1){
        res.status(404).json({mensagem: 'Id não encontrado'})
        return
    }

    bancoDeDados.exames.splice(exameIndex, 1)

    res.status(204).send()
    return
}