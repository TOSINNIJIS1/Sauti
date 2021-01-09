import React from 'react';
import '../listPage/styles/list.scss';
import './profile.scss'
import ProfileImage from '../listPage/images/ayo-ogunseinde-UzSPiVmnkAA-unsplash.png'
import {Link} from 'react-router-dom'

export default function Profile () {


    return (
        <div className='listContainer'>
            <div className='left'>
                <h1> Sauti </h1>
                <hr />

                <h3> Profile </h3> 

                <nav style={{cursor: 'pointer'}}>
                    <Link to='/'>
                        <h4> Home </h4>
                    </Link>

                    <Link to='/market'>
                        <h4> Market Price </h4>
                    </Link>

                    <Link to='/list'>
                        <h4> Listings </h4>
                    </Link>

                    <Link to='/profile'>
                        <h4 style={{color: 'white'}} link to='/profile'> Profile </h4>
                    </Link>
                    
                    <Link to='/product'>
                        <h4> Add Product </h4>
                    </Link>
                </nav>
                
                <p> Sign Out </p>
            </div>

            <div className='profileRight' style={{marginTop: '2%'}}>
                <div className='image' style={{marginBottom: '5%'}}>
                    <img src={ProfileImage} alt='' />
                </div>
                
                <form>
                    <label> Full Name </label>
                    <input
                    />

                    <label> Phone </label>
                    <input 

                    />

                    <label> Email </label>
                    <input 

                    />

                    <label> Password </label>
                    <input 
                    
                    />

                    <label> Location </label>
                    <input 

                    />

                    <div className='button'>
                    <button onClick={(e) => {e.preventDefault()}} > Save </button>
                    <button onClick={(e) => {e.preventDefault()}} > Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    )
}