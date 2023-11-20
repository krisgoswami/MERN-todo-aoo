import express from 'express';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controller/todoController.js';

const router = express.Router();

router.get('/allTodos', getTodo);
router.post('/addTodo', createTodo);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

export default router;