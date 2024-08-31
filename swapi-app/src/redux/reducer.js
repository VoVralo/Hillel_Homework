import {
   FETCH_DATA_REQUEST,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAILURE,
   CLEAR_TODO
 } from './actions';
 
 const initialState = {
   loading: false,
   data: [],
   error: '',
   todo: []
 };
 
 const reducer = (state = initialState, action) => {
   switch (action.type) {
     case FETCH_DATA_REQUEST:
       return { ...state, loading: true };
     case FETCH_DATA_SUCCESS:
       return { ...state, loading: false, data: action.payload };
     case FETCH_DATA_FAILURE:
       return { ...state, loading: false, error: action.payload };
     case CLEAR_TODO:
       return { ...state, todo: [] };
     default:
       return state;
   }
 };
 
 export default reducer;
 