import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, SERVICE_DEF } from "../../contants/dispatch";

export function loginAction(params) {
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