import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
  getLocalidades,
  getLocalidad,
  createLocalidad,
  deleteLocalidad,
  updateLocalidad,
} from "../controllers/localidades.controller.js";

const router = Router();

router.get("/localidades", authREquired, getLocalidades);

router.get("/localidades/:id", authREquired, getLocalidad);

router.post("/localidades", authREquired, createLocalidad);

router.delete("/localidades/:id", authREquired, deleteLocalidad);

router.put("/localidades/:id", authREquired, updateLocalidad);

export default router;
