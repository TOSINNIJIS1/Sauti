import React, { useState } from 'react';
import './styles/register.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import { withRouter } from 'react-router-dom'
import axiosWithAuth from '../auth/authWithAuth';

import { connect } from 'react-redux';
import { registerUser } from '../redux';


function Register ({props}) {
    console.log(props)
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    const imageOnChange = (e) => {
        setImage(e.target.files[0])
    }

    const imageOnSubmit = (e) => {
        e.preventDefault()


    }


    return (        
        <div className='regContainer'>
            <div className='navReg'>
                <NavAll />
            </div>
            <Left />
            

            <div className='right'>
                <h1> Create Account </h1>
                <h1 style={{
                    margin: '0 auto',
                    width: '99%',
                    border: '1px solid black',
                    background: '#AA0114',
                    color: 'white'
                    }}> {props.msg} </h1>

                <form >
                    <label> Full Name </label>
                    <input
                    required
                    type='text'
                    placeholder='Your Full Name Here'
                    defaultValue={props.fname}
                    onChange={(e) => setFname(e.target.value)}
                    />

                    <label> Phone </label>
                    <input
                    required
                    type='tel'
                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    placeholder='Enter Phone Number'
                    defaultValue={props.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />

                    <label> Email </label>
                    <input 
                    required
                    type='email'
                    placeholder='Your Email Here'
                    defaultValue={props.email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <label> Password </label>
                    <input
                    required
                    type='password'
                    placeholder='Password Here'
                    defaultValue={props.password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <label> Re-enter Password </label>
                    <input
                    required
                    type='password'
                    placeholder='Re-enter your Password Here'
                    defaultValue={props.confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                    // onChange={target('confirmpassword')}
                    />

                    <label> Location </label>
                    <input 
                    required
                    type='text'
                    placeholder='Enter Location Here'
                    defaultValue={props.location}
                    onChange={(e) => setLocation(e.target.value)}
                    />

                    {/* <label> Profile Picture </label>
                    <input 
                    type='file'
                    onChange={(e) => setImage(e.target.files[0])}

                    /> */}

                    <button
                    // disabled={!fname || !email || !phone || !password  || !location }
                    onClick={(e) => {
                        e.preventDefault()
                        props.registerUser(fname, email, phone, password, confirmPassword, location)


                    }}
                    > Sign Up </button>
                </form>
            </div>
        </div>
    )
}


function Registration (props) {
    return (
        <div className='regFooter'>
            <Register props={props} />
            <Footer />

        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        fname: state.user.fname,
        email: state.user.email,
        phone: state.user.phone,
        password: state.user.password,
        confirmPassword: state.user.confirmPassword,
        location: state.user.location,
        image: state.user.image,
        msg: state.user.msg
    }
}

const mapDispatchtoProps= (dispatch) => {
    return {
        registerUser: function (fname,phone,email,password, confirmPassword, location) {
            dispatch(registerUser(fname,phone,email,password, confirmPassword, location));
        },
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Registration);