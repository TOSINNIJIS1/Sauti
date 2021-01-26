import React, { useState } from 'react';
import './styles/login.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import { Link } from 'react-router-dom';
// import Popup from './popup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from '../auth/axiosWithAuth';


function Login(props) {
    // const [popup, setPopup] = useState(false);
    // const openPopup = () => {
    //     setPopup(prev => !prev);
    // };

    const [login, setLogin] = useState({
        email: '',
        password: ''
    }) 
    
    const onSubmit = (e) => {
        e.preventDefault()

        axiosWithAuth().post('/login', login)
        .then(res => {
            console.log(res, 'welcome')
            localStorage.setItem('token', res.data.token)
            if (res.status === 200) {
                props.history.push('/dashboard')
            }
        })
        .catch(err => console.log(err))
    }

    const set = (e) => {
        return ({ target: { value } }) => {
            setLogin((oldLogin) => (
                ({ ...oldLogin, [e]: value })
            ))
        }
    }

    return (
        <div class='forFooter'>
            <div className='logContainer'>
                <div className='navReg'>
                    <NavAll />
                </div>
                <Left />

                <div className='right'>
                    <h1> Sign In </h1>

                    <form onSubmit={onSubmit}>
                        <label> Email </label>
                        <input 
                        type='email'
                        name='email'
                        required
                        value={login.email}
                        onChange={set('email')}
                        />

                        <label> Password </label>
                        <input
                        type='password'
                        name='pwd'
                        required
                        value={login.password}
                        onChange={set('password')}
                        />
                        
                        <button 
                        disabled={!login.email || !login.password }
                        // onClick={openPopup}
                        > Sign In </button>
                        {/* <Link to='/dashboard'>
                            <button id='demo' > Demo Login </button>
                        </Link> */}
                        {/* <Popup popup={popup} setPopup={setPopup} /> */}
                    </form>

                    <div className='else'>
                        <p> No account <Link to='/register'><b style={{color: '#20141D'}}> Sign Up! </b> </Link></p>
                        <p> Forgot Password </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Login)