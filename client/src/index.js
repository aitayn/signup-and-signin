import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter , routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './app/app';
import rootReducer from './store';
import * as serviceWorker from './serviceWorker';


export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

if (module.hot) {
    module.hot.accept('./app/app', () => {
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
          , document.getElementById('root')
        );
    })
}