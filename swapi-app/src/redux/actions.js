import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CLEAR_TODO = 'CLEAR_TODO';

const API_URL = 'https://swapi.dev/api/';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get(`${API_URL}people/`);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.results });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};

export const clearTodo = () => {
  return { type: CLEAR_TODO };
};
