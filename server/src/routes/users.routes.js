import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", authREquired, getUsers);

router.get("/users/:id", authREquired, getUser);

router.put("/users/:id", authREquired, updateUser);

router.delete("/users/:id", authREquired, deleteUser);

export default router;
