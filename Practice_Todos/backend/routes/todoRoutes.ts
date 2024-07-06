import express, { Router } from 'express';
import { getAllTodos, addTodo, deleteTodo } from '../controllers/todoController'

const router: Router = Router();

router
    .route('/')
    .get(getAllTodos)
    .post(addTodo);

router.route('/:id')
    .delete(deleteTodo);

export default router;
