import { ADD_TODO, DELETE_TODO } from "../actionCreator/actionCreator"

const initialState = {
    todo: []
}

export const TodoList = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return{
                todo: [...state.todo, {text: action.text, id: action.id}]
            }
        }
        case DELETE_TODO: {
            return {
                todo: state.todo.filter(el => el.id !== action.id)
            }
        }
        default :
        return state
    }
}