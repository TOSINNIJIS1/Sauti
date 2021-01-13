import React, { useState } from 'react';
import './styles/register.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'


function Register (props) {

    const [register, setRegister] = useState({
        fname: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',  // Reenter password
        location: ''

    })

    const target = (e) => {
        return ({target: { value }}) => {
            setRegister((oldRegister) => ({ ...oldRegister, [e]: value  }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className='Rgcont'>
        
            <div className='regContainer'>
                <div className='navReg'>
                    <NavAll />
                </div>
                <Left />
                

                <div className='right'>
                    <h1> Create Account </h1>

                    <form onSubmit={onSubmit}>
                        <label> Full Name </label>
                        <input
                        required
                        type='text'
                        placeholder='Your Full Name Here'
                        value={register.fname}
                        onChange={target('fname')}
                        />

                        <label> Phone </label>
                        <input
                        required
                        type='tel'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        placeholder='XXX-XXX-XXXX'
                        value={register.phone}
                        onChange={target('phone')}
                        />

                        <label> Email </label>
                        <input 
                        required
                        type='email'
                        placeholder='Your Email Here'
                        value={register.email}
                        onChange={target('email')}
                        />
                        
                        <label> Password </label>
                        <input
                        required
                        type='password'
                        placeholder='Password Here'
                        value={register.password}
                        onChange={target('password')}
                        />

                        <label> Re-enter Password </label>
                        <input
                        required
                        type='password'
                        placeholder='Re-enter your Password Here'
                        value={register.confirmpassword}
                        onChange={target('confirmpassword')}
                        />

                        <label> Location </label>
                        <input 
                        required
                        type='text'
                        placeholder='Enter Location Here'
                        value={register.location}
                        onChange={target('location')}
                        />

                        <button
                        disabled={!register.fname || !register.email || !register.phone || !register.password !== !register.confirmpassword || !register.location }
                        > Sign Up </button>
                    </form>
                </div>

            </div>
            <Footer />

        </div>
    )
}


export default function Registration () {

    return (
        <div>
            <Register />
        </div>
    )
}