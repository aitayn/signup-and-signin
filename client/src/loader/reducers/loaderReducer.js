import { LOADER_START, LOADER_STOP } from "../../contants/dispatch";

export const LoaderReducer = (state = [], action) => {
    switch (action.type) {
        case LOADER_START:
            return Object.assign({}, state, {
                loading: true,
                message: action.message
            });
        case LOADER_STOP:
            return Object.assign({}, state, {
                loading: false,
                message: null
            });
        default:
            return state;
    }
}