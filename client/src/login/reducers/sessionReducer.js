import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_ERROR, LOGOUT } from "../../contants/dispatch";

export const SessionReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                loggedIn: false,
                user: null,
                error: false
            });
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS: {
            let user =  action.response.data;
            localStorage.setItem('user', JSON.stringify(user));
            return Object.assign({}, state, {
                loading: false,
                loggedIn: true,
                user: user,
                error: false
            });
        }
        case LOGIN_ERROR: 
            return Object.assign({}, state, {
                loading: false,
                loggedIn: false,
                user: null,
                error: action.error
            });
        case LOGOUT: {
            localStorage.removeItem('user');
            return Object.assign({}, state, {
                loading: false,
                loggedIn: false,
                user: null,
                error: false
            });
        }
        default:
            return state;
    }
}

export const SignupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: false
            });
        case SIGNUP_SUCCESS: 
            return Object.assign({}, state, {
                loading: false,
                error: false
            });
        case SIGNUP_ERROR: 
            return Object.assign({}, state, {
                loading: false,
                data: action.error,
                error: true
            });
        default:
            return state;
    }
}