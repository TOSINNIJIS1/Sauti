import axios from 'axios';


const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://sauti-market-app.herokuapp.com/api',
        headers: {
            authorization: "Bearer" + localStorage.getItem('token')
        }
    })
}


export default axiosWithAuth