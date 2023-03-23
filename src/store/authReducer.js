const defaultState = {
    registeredUsers: [
        {
            login: "admin",
            password: "Pass1"
        },
        {
            login: "Masha",
            password: "123Kasha"
        },
        {login: "Oleg",
        password: "Qwerty987"}
    ],
    isAuth: false,
}

const REGISTER = "REGISTER";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

export const authReducer = (state=defaultState, action) => {
    if (action.type === "REGISTER") {
        const newUser = {
            login: action.payload.login,
            password: action.payload.password
        }
        return {...state,
            registeredUsers: [...state.registeredUsers, newUser]
        }
    } else if(action.type === "SIGN_IN") {
        return {...state,
            isAuth: true,
        } 
    } else if (action.type === "SIGN_OUT") {
        return {...state,
            isAuth: false
        }
    }
    return state;
}

export const getUser = (payload) => ({type: REGISTER, payload});
export const setUser = () => ({type: SIGN_IN});
export const getOutUser = () => ({type: SIGN_OUT});