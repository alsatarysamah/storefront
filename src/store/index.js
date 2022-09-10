import { combineReducers, createStore,applyMiddleware } from 'redux';
import cate from "./cat"
import { composeWithDevTools } from 'redux-devtools-extension';
import product from "./product"
import cart from "./cart"
import thunk from 'redux-thunk';
// let catReducers = combineReducers({ cate });

let reducers = combineReducers({
    cate: cate,
    product: product,
    cart:cart
})

const store = () => {
    return createStore(reducers,applyMiddleware(thunk));
//,composeWithDevTools(thunk)
    // return createStore(counter);
    // return createStore(catReducers);

}

export default store();