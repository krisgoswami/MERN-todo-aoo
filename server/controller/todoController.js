import { Todo } from "../model/todoModel.js";

export const getTodo = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.send(todo);
    } catch (error) {
        console.log(error);
    }
}

export const createTodo = async (req, res) => {
    try {
        const { todo } = req.body;

        const newTodo = new Todo({ todo: todo });
        await newTodo.save();
        res.status(200).send({
            message: 'todo added',
            newTodo,
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        if (!todo) {
            return res.status(404).send({
                message: "Todo not found",
            });
        }
        res.status(200).send({
            message: "Todo updated",
            todo,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: 'Error updating course',
            error,
        });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).send({
                message: "Todo not found",
            });
        }
        res.status(200).send({
            message: "Todo deleted",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: 'Error updating course',
            error,
        });
    }
}