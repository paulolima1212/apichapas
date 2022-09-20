import { prisma } from "../Lib/prisma";

export class GetLaserMP{

    async handle(laser: string){
        
        const data = await prisma.agrupamentos.findMany({
            where:{
                AND:{
                    laser,
                    separada: true
                }
            }
        })
    
        return data
    
    }
}