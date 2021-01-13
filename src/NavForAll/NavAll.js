import React from 'react';
import { Link } from 'react-router-dom';
import './NavAll.scss';


export default function NavAll () {
    return (
        <div>
            <nav className='landingNav'
            style={{
                marginBottom: '5%',
                background: '#20141D'
            }}
            >
                <ul className='landingLeft'>
                    <li className='landingLogo'> Sauti. </li>
                </ul>

                <ul className='landingRight'>
                    <Link to='/home' className='home'> Home </Link>
                    <Link to='/logout' className='logout'> Sign Out </Link>
                    <Link to='/login' className='login'> Sign In  </Link>
                </ul>
            </nav>
        </div>
    )
}
