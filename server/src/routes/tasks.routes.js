import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  putTask,
  getTasksCompletado,
} from "../controllers/tasks.controller.js";

const router = Router();

// obtener
router.get("/tasks", authREquired, getTasks);

// obtener
router.get("/history", authREquired, getTasksCompletado);

// obtener uno solo
router.get("/tasks/:id", authREquired, getTask);

// crear
router.post("/tasks", authREquired, createTask);

// borrar
router.delete("/tasks/:id", authREquired, deleteTask);

// actualizar
router.put("/tasks/:id", authREquired, putTask);

export default router;