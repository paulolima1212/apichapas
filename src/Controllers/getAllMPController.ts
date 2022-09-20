import { Request, Response } from "express";
import { GetAllMP } from "../Models/handleGetAllMPs";

export class GetAllMPController{

    async handle(req:Request, res:Response){

        console.log('pass');
        
        const get = new GetAllMP();

        const data = await get.handle();

        return res.json(data)
        
    }
    
}