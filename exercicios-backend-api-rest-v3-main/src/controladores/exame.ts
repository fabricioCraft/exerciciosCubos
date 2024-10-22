import { Request, Response } from "express";

export const testeExame = (req: Request, res: Response) => {
    res.send('API de exames de direção')
}