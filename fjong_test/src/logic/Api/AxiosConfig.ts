import axios from 'axios';

export const baseURL = 'http://192.168.1.218:3010/'
export const AxiosConfig = axios.create({
    baseURL: baseURL,
  });