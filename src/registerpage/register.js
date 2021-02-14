import React, { useState } from 'react';
import './styles/register.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../auth/authWithAuth';
import PhoneInput from 'react-phone-number-input'


import { connect } from 'react-redux';
// import { registerUser } from '../redux';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register ({props}) {
    // console.log(props)
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [msg, setMsg] = useState('')

    let history = useHistory();


    let validate = (email) => {
        let emailError = ""
        if (!email.includes('@')) {
            toast("Invalid Email")
            return false
        }
        return true
    }
    

    const registerSubmit = (e) => {

        e.preventDefault()

        const isValid = validate(email)

        if (isValid) {
            e.preventDefault()
            const formData = new FormData();

            formData.append('fname', fname)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('confirmPassword', confirmPassword)
            formData.append('phone', phone)
            formData.append('location', location)
            formData.append('image', image)

            axios.post('https://sauti-market-app.herokuapp.com/api/users/register', formData)
            .then((res) => {
                console.log(res)
                toast(res.data.message)
                setMsg(res.data.message)
            
            })
                
            .catch(error => toast(error, 'bang'))
        }
    }
    
    if (msg === 'All good and ready to go')  {
        setTimeout(() => {
            history.push('/login')
        }, 5000)
    }

    return (        
        <div className='regContainer'>
            <div className='navReg'>
                <NavAll />
            </div>
            <Left />
            
            

            <div className='right'>
                <h1> Create Account </h1>
                <ToastContainer />

                {/* <div style={{
                    margin: '0 auto',
                    width: '99%',
                    border: '1px solid black',
                    background: '#AA0114',
                    color: 'white'
                }}>  </div> */}


                <form encType='multipart/form-data' >

                    <img src={image} alt='' />
                    
                    <label> Profile Image </label> 
                    <input 
                    type='file'
                    name='image'
                    onChange={(e) => setImage(e.target.files[0])}
                    />

                    <label> Full Name </label>
                    <input
                    required
                    type='text'
                    placeholder='Your Full Name Here'
                    defaultValue={fname}
                    onChange={(e) => setFname(e.target.value)}
                    />

                    <label> Phone </label>
                    <div className='phoneForm' style={{display: 'flex', fontSize: '1px'}}>
                    <PhoneInput
                    required
                    // type='tel'
                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    defaultCountry="US"
                    placeholder='Enter Phone Number'
                    defaultValue={phone}
                    onChange={setPhone}
                    />
                    </div>


                    <label> Email </label>
                    <input 
                    required
                    type='email'
                    placeholder='Your Email Here'
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <label> Password </label>
                    <input
                    required
                    type='password'
                    placeholder='Password Here'
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <label> Re-enter Password </label>
                    <input
                    required
                    type='password'
                    placeholder='Re-enter your Password Here'
                    defaultValue={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                    // onChange={target('confirmpassword')}
                    />

                    <label> Location </label>
                    <input 
                    required
                    type='text'
                    placeholder='Enter Location Here'
                    defaultValue={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />

                    <button
                    disabled={!fname || !email || !phone || !password  || !location }
                    onClick={ registerSubmit}
                    > Sign Up </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}


function Registration (props) {
    return (
        <div className='regFooter'>
            <Register props={props} />

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


export default connect(mapStatetoProps)(Registration);