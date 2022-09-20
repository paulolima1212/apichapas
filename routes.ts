import { Router } from "express";
import { GetAllMPController } from "./src/Controllers/getAllMPController";
import { GetLaserMPController } from "./src/Controllers/getLaserMPController";
import { GetMPSepController } from "./src/Controllers/getMPSepController";
import { GetMPUrgentController } from "./src/Controllers/getMPUrgentController";
import { SetStatusKaizenController } from "./src/Controllers/setStatusKaizenController";
import { SetStatusMPController } from "./src/Controllers/setStatusMPController";

const router = Router();

const getAllMP  = new GetAllMPController();
const getLaser  = new GetLaserMPController();
const getUrgent = new GetMPUrgentController();
const getSep    = new GetMPSepController();
const setKaizen = new SetStatusKaizenController();
const setSep    = new SetStatusMPController();

router.get('/getallmp', getAllMP.handle)
router.get('/getlaser/:laserparam', getLaser.handle)
router.get('/geturgent', getUrgent.handle)
router.get('/getsep', getSep.handle)
router.put('/setkaizen', setKaizen.handle)
router.put('/setsep', setSep.handle)

export { router };