import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers:{
       "Content-Type": 'application/json'
    }
})

export default axiosInstance;