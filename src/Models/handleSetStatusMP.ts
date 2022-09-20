import { prisma } from "../Lib/prisma";

export class SetStatusMP{

    async handle(id: string, check: boolean){

        const data = await prisma.agrupamentos.updateMany({
            where:{
                id,
            },
            data:{
                separada: check
            },
        })

        return data
        
    }
}