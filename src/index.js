import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Khai báo Provider gói tất cả component con vào đây
const store = createStore(
    appReducers,
    window.__REDUS_DEVTOOLS_EXTENSION__ && window.__REDUS_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
