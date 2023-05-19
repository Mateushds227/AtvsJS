import  express  from "express";
import { putFunction, deleteFunction, getFunction, postFunction } from "../CONTROLLER/JOGOS_CONTROLLER.js";

const router = express.Router()
router.post("/add" , postFunction)
router.delete("/delete/:id" , deleteFunction)
router.get("/find" , getFunction)
router.put("/update/:id" , putFunction)

export {router}