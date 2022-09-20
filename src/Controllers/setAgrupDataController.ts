import { AgrupProps } from "../Interfaces/Agrup";
import { SetAgrupData } from "../Models/handleSetAgrupData";

export class SetAgrupDataController{

    async handle(agrupamento: AgrupProps){

        const setAgrupData = new SetAgrupData();

        const data = setAgrupData.handle(agrupamento)

        return data

    }
}