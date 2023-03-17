// import goods_list from "../assets/products.json";
// import brand_list from "../assets/brands.json";

// const SORT_BY_BRAND = "SORT_BY_BRAND";
// const SHOW_ALL_BRANDS = "SHOW_ALL_BRANDS";

const ADD_IN_CART = "ADD_IN_CART";
const DEL_FROM_CART = "DEL_FROM_CART";
const EMPTY_CART = "EMPTY_CART";

// const INCR_PROD_ITEM = "INCR_PROD_ITEM";
// const DECR_PROD_ITEM = "DECR_PROD_ITEM";
// const CHANGE_PROD_ITEM = "CHANGE_PROD_ITEM";

const defaultState = { 
    // products: goods_list,
    // brands: brand_list,
    prodsCounter: [],
    subtotal: 0,
};

export const cartReducer = (state=defaultState, action) => {

//     if (action.type === SORT_BY_BRAND) {
//         return {...state,
//                 products: goods_list.filter((prod) => `Brand ${prod["brand"]}` === action.payload),
//              }
//     } else if (action.type === SHOW_ALL_BRANDS) {
//         return {...state,
//             products: goods_list,
//          }
//        } else if
// /**************************************************************************** */
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
        const reducedCart = state.prodsCounter.filter((item) => item.id !== action.payload);
        return {...state, 
                prodsCounter: reducedCart,
                subtotal: reducedCart.reduce((prev, prod) => prev + prod.price, 0),
            }
    } else if(action.type === EMPTY_CART) {
        return defaultState;
    }
// /*---------------------------------------------------------*/
//      else if(action.type === INCR_PROD_ITEM) {
//         state.prodsCounter.map(item => {
//             if (item.id === action.payload) {
//                 item.count = item.count+1;
//                 item.total_price = item.count * item.price;
//                 return item;
//             } 
//         return state.prodsCounter} )
//             return {...state,
//                 prodsCounter: state.prodsCounter,
//                 subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.total_price, 0),
//                 }
        

//     } else if(action.type === DECR_PROD_ITEM) {
//         state.prodsCounter.map(item => {
//             if (item.id === action.payload) {
//                 item.count = item.count-1 > 1 ? --item.count : 1;
//                 item.total_price = item.count * item.price;
//                 return item;
//             } 
//             return state.prodsCounter} )
//             return {...state,
//                 prodsCounter: state.prodsCounter,
//                 subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.total_price, 0),
//                 }
        

//     } else if(action.type === CHANGE_PROD_ITEM) {
//         state.prodsCounter.map((item) => {
//             if (item.id === action.id) {
//                 item.count = action.payload;
//                 item.total_price = item.count * item.price;
//             }  
//             return state.prodsCounter} )
//             return {...state,
//                 prodsCounter: state.prodsCounter,
//                 subtotal: state.prodsCounter.reduce((prev, prod) => prev + prod.total_price, 0),
//                 }
//     } 
    return state;
}

// export const sortByBrand = (payload) => ({type: SORT_BY_BRAND, payload});
// export const showAllBrands = () => ({type: SHOW_ALL_BRANDS});

export const addInCart = (payload) => ({type: ADD_IN_CART, payload});
export const delFromCart = (payload) => ({type: DEL_FROM_CART, payload});
export const emptyCart = () => ({type: EMPTY_CART});

// export const incrProd = (payload) => ({type: INCR_PROD_ITEM, payload});
// export const decrProd = (payload) => ({type: DECR_PROD_ITEM, payload: payload});
// export const changeProd = (id, payload) => ({type: CHANGE_PROD_ITEM, id, payload});