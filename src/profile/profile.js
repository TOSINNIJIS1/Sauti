import React, { useEffect, useState } from 'react';
import '../listPage/styles/list.scss';
import './profile.scss'
import ProfileImage from '../listPage/images/ayo-ogunseinde-UzSPiVmnkAA-unsplash.png'
import {Link, withRouter, useParams} from 'react-router-dom'
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer';
import Signout from '../dashboard/signout'
import axiosWithAuth from '../auth/authWithAuth';
import axios from 'axios';


function Profile (props) {
    const [profile, useProfile] = useState([])


    const ProfileOnclick = (id) => {
        axios.get(`http://localhost:1000/api/users/allUser/${id}`)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }

    console.log(props.match.params.id, 'this is props')


    const ProfilePage = event => {
        event.preventDefault()
        axiosWithAuth().get(profile)
    }

    return (
        <div className='listContainer'>
            <NavAll />
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
                
                <Signout />
            </div>

            <div className='profileRight' style={{marginTop: '2%'}}>
                <div className='image' style={{marginBottom: '5%'}}>
                    <img src={ProfileImage} alt='' />
                </div>
                
                <form>
                    <label> Full Name </label>
                    <input
                    // value={user.fname}
                    />

                    <label> Phone </label>
                    <input 
                    // value={user.phone}

                    />

                    <label> Email </label>
                    <input 
                    // value={user.email}

                    />

                    <label> Password </label>
                    <input 
                    type='password'
                    // value={user.password}
                    
                    />

                    <label> Location </label>
                    <input 
                    // value={user.location}
                    />

                    <div className='button'>
                    <button onClick={(e) => {e.preventDefault()}} > Save </button>
                    <button onClick={(e) => {e.preventDefault()}} > Cancel </button>
                    <button id='btnUpdate' onClick={(e) => {e.preventDefault()}} > Update </button>
                    </div>
                </form>
                <Footer />

            </div>

        </div>
    )
}

export default withRouter(Profile)