import React, { useState } from 'react';
import './styles/register.scss';
import Left from '../left/left';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../auth/authWithAuth';

import { connect } from 'react-redux';
// import { registerUser } from '../redux';
import axios from 'axios';

function Register ({props}) {
    console.log(props)
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [msg, setMsg] = useState('')

    let history = useHistory();

    const registerSubmit = (e) => {

        e.preventDefault()
        const formData = new FormData();

        formData.append('fname', fname)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmPassword', confirmPassword)
        formData.append('phone', phone)
        formData.append('location', location)
        formData.append('image', image)

        axios.post('http://localhost:1000/api/users/register', formData)
        .then((res) => setMsg(res.data.message))
        .catch(error => console.log(error, 'bang'))
    }
    
    if (msg === 'All good and ready to go')  {
        history.push('/login')
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
                    }}> {msg} </h1>

                <form encType='multipart/form-data' >

                    <img src={image} alt='' />
                    <label>Profile Image </label> 
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
                    <input
                    required
                    type='tel'
                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    placeholder='Enter Phone Number'
                    defaultValue={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />

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


export default connect(mapStatetoProps)(Registration);