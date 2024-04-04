import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_API_KEY,
};

const api = axios.create(config);

export const getData = async (url: string, params?: any) => {
    try {
        return await api.get(`${url}`, {params});
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const postData = async (url: string, data: any) => {
    try {
        return await api.post(url, data);
    } catch (error) {
        console.error(error);
        return null;
    }
}
