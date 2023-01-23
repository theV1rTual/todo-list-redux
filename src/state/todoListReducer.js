const initialState = {
    todoList: []
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return  {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload)
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, text: action.payload.text}
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

export default todoListReducer;