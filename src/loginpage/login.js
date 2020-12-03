import React, { useState } from 'react';
import './styles/login.scss';

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
                    
                    <button> Sign In </button>
                </form>

                <div className='else'>
                    <p> No account <b> Sign Up! </b></p>
                    <p> Forgot Password </p>
                </div>
            </div>
        </div>
    )
}