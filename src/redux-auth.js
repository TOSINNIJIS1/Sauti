import React from 'react'
import Auth from './redux/action/Authorization/auth';
import jwt from 'jsonwebtoken';
import store from './redux/store'
import {setCurrentUser, logout} from "./redux";
import { connect } from 'react-redux';


function ReduxAuth(props) {
    
    // console.log(localStorage.token)
    if (localStorage.token) {
        Auth(localStorage.token);
        
        jwt.verify(localStorage.token,'secret',function(err,decode) {
            if(err) {
            store.dispatch(logout());
            } else {
            // console.log(decode, 'this is decode');
            store.dispatch(setCurrentUser(decode));
        }
        })
    }
    

    return (
        <div>
            
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
    userDetails:state.user.userDetails
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
    logoutUser: () => {
        dispatch(logout());
    },
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ReduxAuth);
