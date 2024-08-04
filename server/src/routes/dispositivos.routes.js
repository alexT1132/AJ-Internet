import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
  getDispositivos,
  getDispositivo,
  createDispositivo,
  deleteDispositivo,
  updateDispositivo,
} from "../controllers/dispositivos.controllers.js";

const router = Router();

// obtener
router.get("/dispositivos", authREquired, getDispositivos);

// obtener uno solo
router.get("/dispositivos/:id", authREquired, getDispositivo);

// crear
router.post("/dispositivos", authREquired, createDispositivo);

// borrar
router.delete("/dispositivos/:id", authREquired, deleteDispositivo);

// actualizar
router.put("/dispositivos/:id", authREquired, updateDispositivo);

export default router;
