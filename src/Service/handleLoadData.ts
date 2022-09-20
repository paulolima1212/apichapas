import { SetAgrupDataController } from "../Controllers/setAgrupDataController";
import { agrupamentos } from "../Json/CHAPAS.json";

export function handleLoadData(){
    const setData = new SetAgrupDataController();
    agrupamentos.map((agrupamento) => {
      setData.handle(agrupamento)
    })
}