const defaultState = {
    currentProd: null
};

const CURRENT_PROD = "CURRENT_PROD";

export const currentProdReducer = (state=defaultState, action) => {
    if(action.type === "CURRENT_PROD") {
        return state.currentProd = action.payload;
    }
    return state;
}

export const setCurrentProd = (payload) => ({type: CURRENT_PROD, payload});