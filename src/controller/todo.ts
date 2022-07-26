import { RequestHandler } from "express";
import { Todos } from "../models/todos";

export const createToDo: RequestHandler = async (req, res, next) => {
    var todos = await Todos.create({...req.body});
    return res.status(200).json({message: "Item creation successful.", data: todos});
};

export const getTodoById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const todos: Todos | null = await Todos.findByPk(id);
    return res.status(200).json({ message: "Item fetch successful", data: todos });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
    const allTodos: Todos[] = await Todos.findAll();
    return res.status(200).json({ message: "Items fetch successul.", data: allTodos });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Todos.update({ ...req.body }, { where: { id } });
    const updatedTodos: Todos | null = await Todos.findByPk(id);
    return res.status(200).json({ message: "Item update successful", data: updatedTodos });
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedTodo: Todos | null = await Todos.findByPk(id);
    await Todos.destroy({ where: { id } });
    return res.status(200).json({ message: "Item delete successful", data: deletedTodo });
};
