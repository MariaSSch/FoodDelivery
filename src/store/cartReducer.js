const ADD_IN_CART = "ADD_IN_CART";
const DEL_FROM_CART = "DEL_FROM_CART";
const EMPTY_CART = "EMPTY_CART";

const INCR_PROD = "INCR_PROD";
const DECR_PROD = "DECR_PROD";
const CHANGE_PROD_COUNT = "CHANGE_PROD_COUNT";

const defaultState = { 
    prodsCounter: [],
    subtotal: 0,
};

export const cartReducer = (state=defaultState, action) => {

     if(action.type === ADD_IN_CART) {
        const prodItemToCount = {
            id: Date.now(),
            count: 1,
            price: action.payload.price,
            currPrice: action.payload.price,
            title: action.payload.title,
            image: action.payload.image,
        }

        const prodsInCart = [...state.prodsCounter, prodItemToCount]
        return {...state, 
                prodsCounter: prodsInCart,
                subtotal: prodsInCart.reduce((prev, prod) => prev + prod.currPrice, 0),
            }

    } else if(action.type === DEL_FROM_CART) {
        const reducedCart = state.prodsCounter.filter((prod) => prod.id !== action.payload);
        return {...state, 
                prodsCounter: reducedCart,
                subtotal: reducedCart.reduce((prev, prod) => prev + prod.price, 0),
            }
    } else if(action.type === EMPTY_CART) {
        return defaultState;
    }
// /*---------------------------------------------------------*/
     else if(action.type === INCR_PROD) {
        state.prodsCounter.map(prod => {
            if (prod.id === action.payload) {
                prod.count = prod.count+1;
                prod.currPrice = prod.count * prod.price;
                return prod;
            } 
        return state.prodsCounter} )
            return {...state,
                prodsCounter: state.prodsCounter,
                subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.currPrice, 0),
                }
        

    } else if(action.type === DECR_PROD) {
        state.prodsCounter.map(prod => {
            if (prod.id === action.payload) {
                prod.count = prod.count-1 > 1 ? --prod.count : 1;
                prod.currPrice = prod.count * prod.price;
                return prod;
            } 
            return state.prodsCounter} 
            )
            return {...state,
                prodsCounter: state.prodsCounter,
                subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.currPrice, 0),
                }
        

    } else if(action.type === CHANGE_PROD_COUNT) {
        state.prodsCounter.map((prod) => {
            if (prod.id === action.id) {
                prod.count = action.payload;
                prod.currPrice = prod.count * prod.price;
            }  
            return state.prodsCounter} )
            return {...state,
                prodsCounter: state.prodsCounter,
                subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.currPrice, 0),
                }
    } 
    return state;
}

export const addInCart = (payload) => ({type: ADD_IN_CART, payload});
export const delFromCart = (payload) => ({type: DEL_FROM_CART, payload});
export const emptyCart = () => ({type: EMPTY_CART});

export const incrProd = (payload) => ({type: INCR_PROD, payload});
export const decrProd = (payload) => ({type: DECR_PROD, payload: payload});
export const changeProd = (id, payload) => ({type: CHANGE_PROD_COUNT, id, payload});