import axios from 'axios';

let base = '/api'
export const checkLogin = (params) => { return axios.post(`${base}/login`, params).then(res => res.data); };
