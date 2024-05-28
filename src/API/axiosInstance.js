import axios from 'axios';
import { BASEURL } from '../../BaseUrl';  

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
