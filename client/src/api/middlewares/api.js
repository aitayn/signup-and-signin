import { SERVICE_DEF } from "../../contants/dispatch";
import * as api from '../services/api';

const apiMiddleware = store => next => action => {
    let serviceDefination = action[SERVICE_DEF];

    //validations
    if (typeof serviceDefination == 'undefined') {
        return next(action);
    }
    const { url, types } = serviceDefination;

    if (typeof url !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    // form url
    serviceDefination.url = api.getBase() + url;

    const [requestType, successType, failureType] = types;

    // set header for request
    serviceDefination = api.setHeaders(serviceDefination);

    //call request action
    next(actionWith(requestType));

    //web service call
    return api.serviceCall(serviceDefination).then(
        (response) => {
            next(actionWith(successType,response,action.SERVICE_DEF));

        }
    ).catch(error => errorHandler(error, next, action, failureType));
}

function errorHandler(error, next, action, failureType) {
    const message = error && error.data;
    next(actionWith(failureType, (message || 'Failed To Perform Action'),action.SERVICE_DEF));
}

function actionWith(type, response, params) {
    return {
        type,
        response: response,
        params
    }
}

export default apiMiddleware;