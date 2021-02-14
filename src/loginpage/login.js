import React, { useEffect, useState } from 'react';
import './styles/login.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import { Link } from 'react-router-dom';
// import Popup from './popup';
import { connect } from 'react-redux';
import { loginUser } from '../redux'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
    <div className='logContainer'>
        <div className='navReg'>
            <NavAll />
        </div>
        
        <Left />

        <div className='registerRight'>

        <ToastContainer />

            <h1> Sign In </h1>

                <form >
                    <label> Email </label>
                    <input 
                    type='email'
                    name='email'
                    required
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value) }
                    />

                    <label> Password </label>
                    <input
                    type='password'
                    name='pwd'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
                    />
                    
                    <button 
                    disabled={!email && !password }
                    onClick={(e) => {
                        e.preventDefault()
                        props.loginUser(email, password)}
                    }> Sign In </button>
                    
                    <div className='else'>
                        <p> No account <Link to='/register'><b style={{color: '#20141D'}}> Sign Up! </b> </Link></p>
                        <p> Forgot Password </p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        email:state.user.email,
        password:state.user.password,
        msg:state.user.msg
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        loginUser:function(email, password) {
            dispatch(loginUser(email, password));
        },
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Login);