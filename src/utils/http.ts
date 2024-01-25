import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8087/api'
})

export default http;
