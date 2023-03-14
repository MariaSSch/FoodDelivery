const defaultState = {
    currentProd: null
};

const CURRENT_PROD = "CURRENT_PROD";

export const currentProdReducer = (state=defaultState, action) => {
    if(action.type === "CURRENT_PROD") {
       
        return state.currentProd = {
            id: action.payload.id,
            title: action.payload.title,
            fullDescr: action.payload.description,
            price: action.payload.price,
            output: action.payload.output,
            image: action.payload.image,
        };
    }
    return state;
}

export const setCurrentProd = (payload) => ({type: CURRENT_PROD, payload});