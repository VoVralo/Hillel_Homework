
import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS } from '../actions/todoActions';

const fetchTodos = () => Promise.resolve([{ id: 1, text: 'Sample Todo', completed: false }]);

function* loadTodosSaga() {
    try {
        const todos = yield call(fetchTodos);
        yield put({ type: LOAD_TODOS, payload: todos });
    } catch (error) {
        console.error(error);
    }
}

function* todoSaga() {
    yield takeEvery(LOAD_TODOS, loadTodosSaga);
}

export default todoSaga;
