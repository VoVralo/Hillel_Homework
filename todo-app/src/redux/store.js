import { createStore } from 'redux';

const initialState = {
  todos: []
};

const ADD_TODO = 'ADD_TODO';

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
