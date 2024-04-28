import mongoose, { Document, Model, Models, Schema, model } from "mongoose";

interface ITodo extends Document {
    title: String,
    description: String,
    completed: Boolean,
    createAt: Date
};

const todoSchema: Schema = new Schema ({

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
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Todo = model<ITodo>('Todos', todoSchema)


export default Todo;