import { Request, Response } from "express";
import { SetStatusKaizen } from "../Models/handleSetStatusKaizen";

export class SetStatusKaizenController{
    
    async handle(req: Request, res: Response){

        const {id, check}:{id:string, check: boolean} = req.body

        const setStatusKaizen = new SetStatusKaizen();

        const data = await setStatusKaizen.handle(id, check)

        return res.json(data)
        
    }
}