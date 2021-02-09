import {
    SIGNUP_USER,
    LOGIN_USER,
    SET_CURRENT_USER,
    LOGOUT_USER
} from '../action/user/userType';
import isEmpty from 'lodash/isEmpty'

const initialState = {
    fname:'',
    phone: '',
    email:'',
    password:'',
    confirmPassword: '',
    location: '',
    image:'',
    msg:'',
    id:'',
    action:'Signup',
    userDetails: {},
    isLoggedIn:false,
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case SIGNUP_USER : return {
            ...state,
            msg: action.payload
        }
        case LOGIN_USER : return {
            ...state,
            msg:action.payload,
            isLoggedIn:action.isLoggedIn
        }
        case SET_CURRENT_USER:return{
            ...state,
            userDetails:action.payload,
            isLoggedIn: true
            // isLoggedIn: !isEmpty(action.userDetails)
        }
        case LOGOUT_USER:return{
            ...state,
            isLoggedIn:false
        }
        default:return state;
    }
}

export default userReducer;