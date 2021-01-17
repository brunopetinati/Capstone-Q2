import axios from 'axios';

const token = localStorage.getItem("authToken")

const api = axios.create({
    baseURL: "https://json-server-bp.herokuapp.com/",
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export default api