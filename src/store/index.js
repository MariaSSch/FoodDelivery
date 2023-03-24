import { createStore, combineReducers } from "redux";
import {routerReducer} from "react-router-redux";

import {cartReducer} from "./cartReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    cart: cartReducer,
    auth: authReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());