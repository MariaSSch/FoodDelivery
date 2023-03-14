const defaultState = {
    registeredUsers: [
        {
            login: "admin",
            password: "pass"
        },
        {
            login: "Masha",
            password: "123kasha"
        },
        {login: "Oleg",
        password: "qwerty987"}
    ],
    currentUsers: [],
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
        const user = state.currentUsers.find(elem => elem === action.payload);
        console.log(user)
        if (!user) {
        const currentUser = {
            login: action.type.login,
            password: action.type.password
        }
        return {...state,
            currentUsers: [...state.currentUsers, currentUser],
        } 
        } else {alert(",dfkfkjhk")}
    } else if (action.type === "SIGN_OUT") {
        const user = state.currentUsers.find(elem => elem = action.payload);
        return {...state,
            currentUsers: state.currentUsers.filter(elem => elem.login !== user.login)
        }
    }
    return state;
}

export const getUser = (payload) => ({type: REGISTER, payload});
export const setUser = (payload) => ({type: SIGN_IN, payload});
export const getOutUser = (payload) => ({type: SIGN_OUT});