import { router } from "./routes";
import express from "express";
import cors from "cors";
import { handleLoadData } from "./src/Service/handleLoadData";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4001, () => {
    
    handleLoadData()
    console.log('Server is running on port 4001')
    
});
