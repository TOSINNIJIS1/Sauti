import React, { useState } from 'react';
import './styles/register.scss'


function Register () {

    const [register, setRegister] = useState({
        fname: '',
        email: '',
        phone: '',
        password: '',
        rpassword: '',  // Reenter password
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

    function updateAlert(msg) {
        var oldAlert = document.getElementById("alert");
        if (oldAlert) {
            document.body.removeChild(oldAlert);
        }
    
        if (msg) {
            var newAlert = document.createElement("div");
            newAlert.setAttribute("role", "alert");
            newAlert.setAttribute("id", "alert");
            var content = document.createTextNode(msg);
            newAlert.appendChild(content);
            document.body.appendChild(newAlert);
        }
    }

    function validate (aID, aSearchTerm, aMsg){
        var elem = document.getElementById(aID);
        var invalid = (elem.value.indexOf(aSearchTerm) < 0);
        if (invalid) {
            elem.setAttribute("aria-invalid", "true");
            updateAlert(aMsg);
        } else {
            elem.setAttribute("aria-invalid", "false");
            updateAlert();
        }
    }

    return (
        
        <div className='regContainer'>
            <div className='left'>
                <h1> Sauti </h1> 
                <hr />
                <p> Grow your business </p>

                <div className='description'>
                    <span> The Sauti Trade and Market Information <br/> platform provides official, simplified, and <br /> real-time trade procedures, market prices, and <br /> exchange rates. </span>
                </div>

                <div className='image'> 
                    <img src='https://s3-alpha-sig.figma.com/img/c776/6801/7682d227865d7eaa019d6d9ed7429a52?Expires=1607299200&Signature=cv8yofi4nGXxaXapn0eIwExssAgV~RFW21acqUrfUMs06vOZSg-KhQKNsYaZVa~X8cqeUhde3Sb4pqzU88qm4L-FrGmn8OB4Cno5QaEbfuIFSLEUqwqPlfN0QApnf15O999OjMci~hZ6pyl1ulW8jF~G026182KK7wgq6KwhOHHHUBe5mcnjAhsKDEzi9Z9nv9GGTo6997lFqfvrutiiM~MJgbqS5behXikNpohsQXgfsLjQxFqVsFtIXA1NID807H7ezVP-KvKD7wsPEFkIfcY~ZFYW2b1EwPfSRbtmu9cQa-2~iNbUVuy-pn7s1npdMVZave4LX3oH5anUuwMJUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='desc' />
                </div>

            </div>

            <div className='right'>
                <h1> Create Account </h1>

                <form onSubmit={onSubmit}>
                    <label> Full Name </label>
                    <input
                    type='text'
                    placeholder='Your Full Name Here'
                    required
                    value={register.fname}
                    onChange={target('fname')}
                    />

                    <label> Phone </label>
                    <input
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    placeholder='XXX-XXX-XXXX'
                    required
                    value={register.phone}
                    onChange={target('phone')}
                    />

                    <label> Email </label>
                    <input 
                    type='email'
                    placeholder='Your Email Here'
                    required
                    value={register.email}
                    onChange={target('email')}
                    />
                    
                    <label> Password </label>
                    <input
                    type='password'
                    placeholder='Password Here'
                    value={register.password}
                    onChange={target('password')}
                    />

                    <label> Re-enter Password </label>
                    <input
                    type='password'
                    placeholder='Re-enter your Password Here'
                    required
                    value={register.rpassword}
                    onChange={target('rpassword')}
                    />

                    <label> Location </label>
                    <input 
                    type='text'
                    placeholder='Enter Location Here'
                    required
                    value={register.location}
                    onChange={target('location')}
                    />

                    <button> Sign Up </button>
                </form>
            </div>

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