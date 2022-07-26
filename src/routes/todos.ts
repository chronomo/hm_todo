import { Router } from "express";

import {
    createToDo,
    getTodoById,
    getAllToDo,
    updateTodo,
    deleteTodo
} from "../controller/todo";

const router = Router();

router.post("/", createToDo);
router.get("/:id", getTodoById);
router.get("/", getAllToDo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;