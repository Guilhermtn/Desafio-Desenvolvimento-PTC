import express from "express";
import { readAllUsers } from "./controllers/UserController";
import { createCalcado, readAllCalcados, updateCalcado, deleteCalcado } from "./controllers/CalcadosController";

const routes = express.Router();

routes.get("/users", readAllUsers);

// Rotas de calçados
routes.post("/calcados", createCalcado);       // POST 
routes.get("/calcados", readAllCalcados);       // GET 
routes.patch("/calcados/:id", updateCalcado);   // PATCH 
routes.delete("/calcados/:id", deleteCalcado);  // DELETE 

export default routes;