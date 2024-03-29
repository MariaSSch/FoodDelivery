import { createStore, combineReducers } from "redux";
import {routerReducer} from "react-router-redux";

import {cartReducer} from "./cartReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    cart: cartReducer,
    auth: authReducer,
});

function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }


const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;