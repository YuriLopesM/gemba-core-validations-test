import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx ?: any) {
    const { '@core:token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://paris:5000',
    })

    api.interceptors.request.use(config => {
        console.log(config);
        return config;
    })
    
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api;
}