import MainReducer from 'reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


export default createStore(
    MainReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
