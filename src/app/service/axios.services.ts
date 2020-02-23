import axios from 'axios';
import loginUrl from '../api/login-url';
import HttpClientUrl from '../../public/baseUrl';
import { PageBean } from '../models/page-bean';

const httpUrl = HttpClientUrl.baseUrl;

class AxiosServices {
    /**
     * 用户信息登录
     * @param userName 
     * @param password 
     */
    userLogin(userName: string, password: string) {
        let url = `${httpUrl}${loginUrl.login}?userName=${userName}&password=${password}`;
        return axios.get(url);
    }

    getUserInfoList() {  
        let url = `${httpUrl}${loginUrl.userlist}`;
        return axios.get(url);
    }

    getUserInfoByPageAndSize(pageBean: PageBean)  {
        let page = pageBean.page;
        let size = pageBean.size;
        let url = `${httpUrl}${loginUrl.getuser}?page=${page}&size=${size}`;
        return axios.get(url);
    }
}

export const axiosSerices = new AxiosServices();