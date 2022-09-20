import { Request, Response } from "express";
import { GetLaserMP } from "../Models/handleGetLaserMP";

export class GetLaserMPController{

    async handle(req:Request, res:Response){

        const {laserparam} = req.params

        let laser = ''

        switch (laserparam) {
            case 'ls5030':
                laser = 'LASER 5030'
                break;
            case 'ls3030':
                laser = 'LASER 3030'
                break;
            case 'ls5040':
                laser = 'LASER 5040'
                break;
            default:
                break;
        }
        
        const getLaserMP = new GetLaserMP();

        const data = await getLaserMP.handle(laser)

        return res.json(data)

    }
}