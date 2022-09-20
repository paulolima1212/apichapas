import { AgrupProps } from "../Interfaces/Agrup";
import { prisma } from "../Lib/prisma";

export class SetAgrupData{

    async handle(agrupamento:AgrupProps){
    
        const data = await prisma.agrupamentos.create({
            data:{
                agrupamento: agrupamento.agrup,
                date: agrupamento.data,
                inicio: agrupamento.ini_plan,
                kaizen: false,
                laser: agrupamento.maq,
                materia_prima: agrupamento.mp,
                separada: false,
                tempo_corte: agrupamento.tCorte,
            },
        });

        return data
    };
};