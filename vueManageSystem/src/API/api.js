import axios from 'axios';

let base = '/api'
export const checkLogin = (params) => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const getUserList = () => { return axios.get(`${base}/user/list`).then(res => res.data); };
