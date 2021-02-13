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
import { connect } from 'react-redux';
import Upload from '../addProduct/image/upload.png'

function Profile (props) {

    const [id, setId] = useState(props.id)
    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')
    const [upload, setUpload] = useState('')

    // console.log(id)


    



    const getDetails = (id) => {
        axios.get(`https://sauti-market-app.herokuapp.com/api/users/info/${id}`)
        .then((res) => {
            // console.log(res.data.data, 'line 41 data')
            setFname(res.data.data.fname)
            setPhone(res.data.data.phone)
            setEmail(res.data.data.email)
            setPassword(res.data.data.password)
            setLocation(res.data.data.location)
            setMessage(res.data.message)
            setImage(res.data.data.image)
            })

        .catch((error) => console.log(error))
    }
    // For Image


    const UpdateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('phone', phone)
        formData.append('location', location)
        formData.append('image', image)

        axios.put(`https://sauti-market-app.herokuapp.com/api/users/update-profile/${id}`, formData)
        .then(res => {
            // console.log(res, 'updated result')
            getDetails(id)
        })
        .catch(err => console.log(err))
    }
    // Image ends here
    
    if(image){
        var imageString = image;
    }else{
        imageString = Upload;
    }

    // console.log(imageString, 'line 79')


    useEffect(() => {
        // console.log(id)
        getDetails(id)
        
    },[])


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
                <div className='image' style={{marginBottom: '3%'}}>
                    <img src={imageString} alt='' style={{
                        objectFit: 'cover'
                    }} />
                </div>
                
                <form encType='multipart/form-data'>
                    <label> Full Name </label>
                    <input
                    type='text'
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                    />

                    <label> Phone </label>
                    <input 
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />

                    <label> Email </label>
                    <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <label> Password </label>
                    <input 
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />

                    <label> Location </label>
                    <input 
                    type='text'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    />

                    <label> Profile Image </label>
                    <input type='file' name='image' 
                    onChange={(e) => setImage(e.target.files[0])}

                    />

                    <div className='button'>
                    <button onClick={UpdateProfile} > Save </button>
                    <button onClick={(e) => {e.preventDefault()}} > Cancel </button>
                    <button id='btnUpdate' onClick={UpdateProfile} > Update </button>
                    </div>
                </form>
                <Footer />

            </div>

        </div>
    )
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        id: state.user.userDetails.id,
    }
}

export default connect(mapStatetoProps)(Profile);
