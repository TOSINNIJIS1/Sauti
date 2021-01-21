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
                        <li className='navLogo' style={{color: '#FE7A7C'}} > Sauti. </li>
                    </Link>
                </ul>

                <ul className='navRight'>
                    <Link to='/' className='home' style={{color: "white"}}> Home </Link>
                    {/* <Link to='/logout' className='logout'> Sign Out </Link> */}
                    <Link to='/login' className='login' style={{color: "white"}}> Sign In  </Link>
                </ul>
            </nav>
        </div>
    )
}
