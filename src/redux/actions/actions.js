import { ADD_TODO, DELETE_TODO } from "../actionCreator/actionCreator"

export const AddTodo = (text, id) => {
    return {
        type: ADD_TODO,
        text,
        id
    }
}

export const DeleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}