import axios from "axios";

export default function Auth(token){
    if(token){
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}