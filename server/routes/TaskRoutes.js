import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/TaskControllers.js";

const router = express.Router();

router.post("/", createTask);
router.put("/:id", updateTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);

export default router;
