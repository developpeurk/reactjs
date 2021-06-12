import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rooutReducer';
const middlewares = [thunk, logger];

// reducers

//store (reducer / )
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
