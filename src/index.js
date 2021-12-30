import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return {...state, feeling: action.payload};
            default:
                return state;
}}

const understandingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return  {...state, understanding: action.payload};
            default:
                return state;
    }
}

const supportReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return {...state, support: action.payload};
            default:
                return state;
    }
}

const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {...state, comment:action.payload};
            default:
                return state;
    }
}

    const storeInstance = createStore(
        combineReducers({
            feelingReducer,
            understandingReducer,
            supportReducer,
            commentReducer
            }),
        applyMiddleware(logger)
            );


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
            registerServiceWorker();
