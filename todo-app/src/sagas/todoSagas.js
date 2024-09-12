import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  LOAD_TODOS_REQUEST, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE 
} from '../actions/todoActions';

const fetchTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Sample Todo 1', completed: false },
        { id: 2, text: 'Sample Todo 2', completed: true }
      ]);
    }, 1000);
  });
};

function* loadTodosSaga() {
  try {
    const todos = yield call(fetchTodos);
    yield put({ type: LOAD_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: LOAD_TODOS_FAILURE, payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_TODOS_REQUEST, loadTodosSaga);
}