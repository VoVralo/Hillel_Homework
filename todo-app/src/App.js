import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import TodoList from './components/TodoList';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1>TODO List</h1>
                    <TodoList />
                </header>
            </div>
        </Provider>
    );
}

export default App;