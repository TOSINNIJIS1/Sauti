import axios from 'axios';


const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:1000/api/users/',
        headers: {
            authorization: "Bearer" + localStorage.getItem('token')
        }
    })
}


export default axiosWithAuth