import React from 'react';
import { Link } from 'react-router-dom';
import './NavAll.scss';


export default function NavAll () {
    return (
        <div>
            <nav className='allNav'
            style={{
                marginBottom: '5%',
                background: '#20141D'
            }}
            >
                <ul className='navLeft'>
                    <Link to='/dashboard'>
                        <li className='navLogo'> Sauti. </li>
                    </Link>
                </ul>

                <ul className='navRight'>
                    <Link to='/' className='home'> Home </Link>
                    {/* <Link to='/logout' className='logout'> Sign Out </Link> */}
                    <Link to='/login' className='login'> Sign In  </Link>
                </ul>
            </nav>
        </div>
    )
}
