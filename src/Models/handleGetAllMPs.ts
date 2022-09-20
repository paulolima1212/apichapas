import { prisma } from "../Lib/prisma";

export class GetAllMP{

    async handle(){

        const data = await prisma.agrupamentos.findMany();
        return data

    }

}