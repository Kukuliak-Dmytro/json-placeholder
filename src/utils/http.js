import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:{
        'Content-Type': 'application/json',

    },
    timeout: 15000,
});
export default axiosClient;