import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SessionReducer, SignupReducer } from './login/reducers/sessionReducer';

export const rootReducer = combineReducers({
    routing: routerReducer,
    session: SessionReducer,
    signUp: SignupReducer
});


export const initialState = {
    session:{
        loading: false,
        loggedIn: (localStorage.getItem('user') && !!JSON.parse(localStorage.getItem('user')).accessToken) || false,
        user: (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || null,
        error: false
    },
    signUp: {
        loading: false,
        data: null,
        error: false
    }
}