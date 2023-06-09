import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);

const rootId = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    rootId
);
