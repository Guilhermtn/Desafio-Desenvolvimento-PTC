import express from "express";
import { readAllUsers } from "./controllers/UserController";
import { 
  createCalcado, 
  readAllCalcados, 
  updateCalcado, 
  deleteCalcado,
  getByTamanho,
  getByMarca,
  getTotalPares 
} from "./controllers/CalcadosController";

const routes = express.Router();

routes.get("/users", readAllUsers);

// Rotas de calçados
routes.post("/calcados", createCalcado);         
routes.patch("/calcados/:id", updateCalcado);   
routes.delete("/calcados/:id", deleteCalcado);  
routes.get("/calcados/tamanho/:tamanho", getByTamanho);  
routes.get("/calcados/marca/:marca", getByMarca);         
routes.get("/calcados/total", getTotalPares);              
routes.get("/calcados", readAllCalcados);  

export default routes;