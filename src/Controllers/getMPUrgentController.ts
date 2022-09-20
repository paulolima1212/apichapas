import { Request, Response } from "express";
import { GetUrgent } from "../Models/handleGetUrgent";

export class GetMPUrgentController{

    async handle(req: Request, res: Response){

        const getMPUrgent = new GetUrgent()

        const data = await getMPUrgent.handle()

        return res.json(data)
    
    }
}