import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../../contants/dispatch";

export const SessionReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                loggedIn: false,
                user: null,
                error: false
            });
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
        default:
            return state;
    }
}