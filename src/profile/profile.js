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
    const [profile, setProfile] = useState({
        id: props.id,
        fname: props.fname,
        phone: props.phone,
        email: props.email,
        password: props.password,
        location: props.location,
        msg: props.msg,

    })

    const [image, setImage] = useState({
        image: props.image,
        upload: null
    })

    
    useEffect(() => {
        // console.log(profile.id)
        getDetails(profile.id)
    },[])


    const getDetails = (id) => {
        axios.get(`https://sauti-market-app.herokuapp.com/api/users/info/${id}`)
        .then((res) => {
            setImage({
                image: res.data.data[0].image
            })
        })
        .catch((error) => console.log(error))
    }
    // For Image

    const changeImage = (e) => {
        setImage({
            upload: e.target.files[0]
        });
    }

    const UpdateProfile = (e) => {
        e.preventDefault();
        // console.log(profile.id, 'id')
        //create object of form data
        const formData = new FormData();
        formData.append("image", image.upload);
        formData.append("id", profile.id);

        //update-profile
        axios.post('https://sauti-market-app.herokuapp.com/api/users/update-profile/',formData)
        .then((res) => {
            console.log(res, 'this is the result of update profile');
            // setProfile({msg: res.data.message});
            setImage({image: res.data.data.image});
        })
        .catch(err => console.log(err))
    }
    // Image ends here


    
    if(image.image){
        var imageString = image.image;
    }else{
        imageString = Upload;
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
                <div className='image' style={{marginBottom: '3%'}}>
                    <img src={imageString} alt='' style={{
                        objectFit: 'cover'
                    }} />
                </div>
                
                <form>
                    <label> Full Name </label>
                    <input
                    type='text'
                    value={profile.fname}
                    />

                    <label> Phone </label>
                    <input 
                    type='tel'
                    value={profile.phone}

                    />

                    <label> Email </label>
                    <input 
                    type='email'
                    value={profile.email}

                    />

                    <label> Password </label>
                    <input 
                    type='password'
                    value={profile.password}
                    />

                    <label> Location </label>
                    <input 
                    type='text'
                    value={profile.location}
                    />

                    <label> Profile Image </label>
                    <input type='file' name='image' onChange={changeImage} />

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
        fname: state.user.userDetails.fname,
        phone: state.user.userDetails.phone,
        email: state.user.userDetails.email,
        password: state.user.userDetails.password,
        location: state.user.userDetails.location,
        image: state.user.image,
        msg:state.user.msg
    }
}

export default connect(mapStatetoProps)(Profile);
