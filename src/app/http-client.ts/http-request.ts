import axios from 'axios';
import * as rxEvent from 'pubsub-js';
import EventKeys from '../core/event-keys';


/**
 * 请求响应的拦截
 */
axios.interceptors.response.use((res: any) => {
    return res.data;
}, (error: any) => {
    return (error.response)
});


/**
 * 请求参数的拦截
 */
axios.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
})