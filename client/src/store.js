import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SessionReducer } from './login/reducers/sessionReducer';

export const rootReducer = combineReducers({
    routing: routerReducer,
    session: SessionReducer
});


export const initialState = {
    session:{
        loading: false,
        loggedIn: false,
        user: null
    }
}