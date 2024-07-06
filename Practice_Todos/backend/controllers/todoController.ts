import Todo from '../models/todo' 
import asyncHandler from 'express-async-handler';
import { ITodo } from '../models/todo'; 




//come back and fix request and response type

export const addTodo = asyncHandler(async (req: any, res: any, next ) => {
    
        const {title, description, completed} = req.body;
    
        const todo : ITodo  = await Todo.create({
            title,
            description,
            completed,
            
        });
        res.status(200).json(todo);

        next()
    
})

export const deleteTodo = async (req:any, res: any) => {

const todo = await Todo.findById(req.params.id)

await todo?.deleteOne({_id : req.params.id});

res.status(200).json({message:`${req.params.id} has been deleted` });


}

export const getAllTodos = async (req: any, res: any) => {
    
    //mongo command to get all the goals
    
    const allGoals = await Todo.find();

    res.status(200).json(allGoals)
}


