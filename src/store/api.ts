import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    params: {}
});
export default api;

