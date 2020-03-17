import axios from 'axios';
import loginUrl from '../api/login-url';
import HttpClientUrl from '../../public/baseUrl';
import { PageBean } from '../models/page-bean';
import StoreUrl from '../api/store-url';
import { StoreInfo } from '../models/store-info';
import { PersonBasicInfo } from '../models/person-basic-info';

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
    storeInfoMessageByPageAndSize(pageBean: PageBean) {
        let page = pageBean.page;
        let size = pageBean.size;
        let url = `${httpUrl}${StoreUrl.lookStore}?page=${page}&size=${size}`;
        return axios.get(url);
    }

    saveStoreInfo(storeInfo: StoreInfo) {
        const url = `${httpUrl}${StoreUrl.saveStore}`;
        return axios.post(url, storeInfo);
    }

    getTimeSheetListInfo(personId: string) {
        let url = `${httpUrl}${StoreUrl.timeSheet}?personId=${personId}`;
        return axios.get(url);
    }
    deleteStoreInfoById(id: string, perId: any) {
        let url = `${httpUrl}${StoreUrl.deleteStoreInfo}?id=${id}&perId=${perId}`;
        return axios.delete(url);
    }
}

export const axiosSerices = new AxiosServices();