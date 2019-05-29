import { LOADER_START, LOADER_STOP } from "../../contants/dispatch";

export function startLoader(message){
    return dispatch => {
        dispatch({
            type: LOADER_START,
            message
        });
    }
}

export function stopLoader(message){
    return dispatch => {
        dispatch({
            type: LOADER_STOP
        });
    }
}