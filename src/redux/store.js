import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import productReducer from './reducer/productReducer';
import userReducer from './reducer/userReducer';
const thunkMiddleware =require('redux-thunk').default;



const mainReducer=combineReducers(
    {
        product:productReducer,
        user:userReducer
    }
);

const store = createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;