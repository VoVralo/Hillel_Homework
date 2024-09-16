import { ADD_TODO, LOAD_TODOS, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS } from '../actions/todoActions';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }] };
        case LOAD_TODOS:
            return state;
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                )
            };
        case CLEAR_TODOS:
            return { ...state, todos: [] };
        default:
            return state;
    }
};

export default todoReducer;