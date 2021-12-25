import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
    switch(action.type){
    case 'SET_HOME':
        return{...state, home: action.payload};
    case 'SET_FEELING':
        return{...state, feeling: action.payload};
        case 'SET_UNDERSTANDING':
        return{...state, understanding: action.payload};
        case 'SET_SUPPORT':
        return{...state, support: action.payload};
        case 'SET_COMMENT':
        return{...state, comment: action.payload};
        default: return state;
    }
};


    const storeInstance = createStore(
        combineReducers({
            feedbackReducer
            }),
        applyMiddleware(logger)
            );
        

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
            registerServiceWorker();
