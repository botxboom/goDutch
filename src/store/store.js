import { applyMiddleware, createStore, compose } from 'redux';
import expenseReducer from './reducers/expenseReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(expenseReducer, composeEnhancers(applyMiddleware()))

export default store