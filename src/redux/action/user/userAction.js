import {
    SIGNUP_USER,
    LOGIN_USER,
    SET_CURRENT_USER,
    LOGOUT_USER
} from './userType';

import Auth from "../Authorization/auth";
import jwt from "jsonwebtoken";
import axios from 'axios'


// export const registerUser = (fname, email, phone, password, confirmPassword, location, image) => {
//     return function (dispatch) {

//         axios.post('http://localhost:1000/api/users/register', {
//             fname: fname,
//             email: email,
//             phone: phone,
//             password: password,
//             confirmPassword: confirmPassword,
//             location: location,
//             image: image
//         })
//         .then((res)=> {
//             console.log(res)
//             const message = res.data.message;
//             const token = res.data.token
//             dispatch({
//                 type:SIGNUP_USER,
//                 payload: message, token
//             })
//             if (message === "All good and ready to go")
//                 window.location.href="/login";
//         })

//         .catch((err) => console.log(err))
//     }
    
// }

export const loginUser = (email, password) => {
    return function (dispatch) {
        axios.post('http://localhost:1000/api/users/login', {
            email: email,
            password: password
        })
        .then(res => {
            // console.log(res)
            const data = res.data.message;

            if (data === 'User Found') {
                const token = res.data.token;
                localStorage.setItem("token", token);
                // console.log(token)

                Auth(token);
                dispatch(setCurrentUser(jwt.decode(token)));
                // console.log(jwt.decode(token))
                dispatch({
                    type: LOGIN_USER,
                    payload: data,
                    isLoggedIn: true
                })
                if (token) 
                    window.location.href="/dashboard";

            } else {
                dispatch({
                    type: LOGIN_USER,
                    payload: data,
                    isLoggedIn: false,
                })
            }
        })
        .catch(err=>console.log(err));
    }
}

export const setCurrentUser = (user) => {
    // console.log(user, 'user')
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const logout = () => {
    return function (dispatch) {
        localStorage.removeItem('token');
        Auth(false);
        dispatch(setCurrentUser({}))

        dispatch({
            type:LOGOUT_USER
        })
        window.location.href="/login";
    }
}
