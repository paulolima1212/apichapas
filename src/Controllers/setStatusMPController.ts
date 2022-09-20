import { Request, Response } from "express";
import { SetStatusMP } from "../Models/handleSetStatusMP";

export class SetStatusMPController{
    
    async handle(req: Request, res: Response){

        const {id, check}:{id: string, check: boolean} = req.body
        
        const setStatusMP = new SetStatusMP()

        const data = setStatusMP.handle(id, check)
        
        return res.json(data)
        
    }
}