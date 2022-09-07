import { combineReducers, createStore } from 'redux';
import cate from "./cat"
import product from "./product"
import cart from "./cart"

// let catReducers = combineReducers({ cate });

let reducers = combineReducers({
    cate: cate,
    product: product,
    cart:cart
})

const store = () => {
    return createStore(reducers);

    // return createStore(counter);
    // return createStore(catReducers);

}

export default store();