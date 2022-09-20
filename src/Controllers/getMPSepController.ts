import { Request, Response } from "express";
import { GetMPSep } from "../Models/handleGetMPSep";

export class GetMPSepController{

    async handle(req: Request, res: Response){

        const getMPSep = new GetMPSep()

        const data = await getMPSep.handle();

        return res.json(data)
        
    }
}