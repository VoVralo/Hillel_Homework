import { 
   ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS, 
   LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE 
 } from '../actions/todoActions';
 
 const initialState = {
   todos: [],
   error: null
 };
 
 const todoReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADD_TODO:
       return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }] };
     case REMOVE_TODO:
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
     case LOAD_TODOS_SUCCESS:
       return { ...state, todos: action.payload };
     case LOAD_TODOS_FAILURE:
       return { ...state, error: action.payload };
     default:
       return state;
   }
 };
 
 export default todoReducer;