import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, 
    SERVICE_DEF, 
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../../contants/dispatch";

export function login(params) {
    return (dispatch, getState) => {
        dispatch({
            [SERVICE_DEF]: {
                url: '/login',
                types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR],
                method: 'POST',
                data:params,
                withAuth: false
            }
        });
    }
}

export function signUp(params) {
    return (dispatch, getState) => {
        dispatch({
            [SERVICE_DEF]: {
                url: '/login',
                types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR],
                method: 'POST',
                data:params,
                withAuth: false
            }
        });
    }
}