import { prisma } from "../Lib/prisma";

export class SetStatusKaizen{
    
    async handle(id: string, check: boolean){

        const data = await prisma.agrupamentos.updateMany({
            where:{
                id,
            },
            data:{
                kaizen: check
            }
        })

        return data
    }
}