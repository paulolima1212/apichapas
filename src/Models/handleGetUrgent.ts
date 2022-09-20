import { Request, Response } from "express";
import { prisma } from "../Lib/prisma";

export class GetUrgent{

    async handle(){

        const data = await prisma.agrupamentos.findMany({
            where:{
                separada: false
            }
        })
    
        return data
    }
}