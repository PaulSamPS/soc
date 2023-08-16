import axios from 'axios';

const $api = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

const $apiAuth = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

const authInterceptor = (config: any) => {
    config.headers.authorization = localStorage.getItem('authToken');
    return config;
};

$apiAuth.interceptors.request.use(authInterceptor);

export { $api, $apiAuth };
