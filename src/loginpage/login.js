import React, { useState } from 'react';
import './styles/login.scss';
import Left from '../left/left';

export default function Login() {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    }) 
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const set = (e) => {
        return ({ target: { value } }) => {
            setLogin((oldLogin) => (
                ({ ...oldLogin, [e]: value })
            ))
        }
    }

    return (
        
        <div className='logContainer'>
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
                    
                    <button disabled={!login.email || !login.password }> Sign In </button>
                </form>

                <div className='else'>
                    <p> No account <b> Sign Up! </b></p>
                    <p> Forgot Password </p>
                </div>
            </div>
        </div>
    )
}