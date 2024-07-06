import  { Document, Schema, model } from "mongoose";

export interface ITodo extends Document {
    title: String,
    description: String,
    completed: Boolean,
   
};


const TodoSchema: Schema = new Schema<ITodo> ({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
   
}, {timestamps: true});

const Todo = model<ITodo>('Todos', TodoSchema)


export default Todo;