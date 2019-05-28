import * as axios from 'axios';
const apiConfig = {
    protocol: 'https',
    host:"demo2886892.mockable.io"
}

export function getBase(config = apiConfig) {
    return config.protocol + '://' + config.host;
}

export function serviceCall(requestConfig) {
    return axios(requestConfig);
}

export function setHeaders(requestConfig) {
    requestConfig['headers'] = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    delete axios.defaults.headers.common['Authorization'];

    if (localStorage.user && requestConfig.withAuth) {
        requestConfig['headers']['Authorization'] = 'Bearer ' + JSON.parse(localStorage.user).accessToken;
    }
    axios.defaults.headers.common['Authorization'] = requestConfig['headers']['Authorization'];
    return requestConfig;
}