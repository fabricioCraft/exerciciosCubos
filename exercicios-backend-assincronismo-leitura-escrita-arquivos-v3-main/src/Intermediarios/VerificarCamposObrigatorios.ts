import { NextFunction, Request, Response } from "express"

const verificarCamposObrigatorios = (req: Request, res: Response, next: NextFunction) => {

    if(!req.body.titulo || !req.body.origem || !req.body.tipo || !req.body.descricao) {
        res.status(400).json({
            mensagem: 'verificar se todos os campos obrigatórios foram enviados'
        })
        return
    }

    next()
}

export default verificarCamposObrigatorios