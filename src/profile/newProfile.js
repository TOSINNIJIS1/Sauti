import React, { useEffect, useState } from 'react';
import '../listPage/styles/list.scss';
import './profile.scss'
import {Link, withRouter, useParams} from 'react-router-dom'
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer';
import Signout from '../dashboard/signout'
import axios from 'axios';
import Upload from '../addProduct/image/upload.png'

function Profile () {
    const 
    const [profile, setProfile] = useState({
        userId: props.id,
        fname: props.fname,
        phone: props.phone,
        email: props.email,
        password: props.password,
        location: props.location,
        msg: props.msg,
    })

    var id = props.id
    console.log(id)
    const [image, setImage] = useState({
        image: props.image,
        // upload: null
    })

    console.log(image.image, 'image')

    
    useEffect(() => {
        console.log(profile.id)
        getDetails(profile.userId)
    },[])


    const getDetails = (userId) => {
        axios.get(`http://localhost:1000/api/users/info/${userId}`)
        .then((res) => {
            console.log(res.data.data, 'line 41 data')
            setProfile({
                fname: res.data.data.fname,
                phone: res.data.data.phone,
                email: res.data.data.email,
                password: res.data.data.password,
                location: res.data.data.location,
                msg: res.data.message,
            })
            setImage({
                image: res.data.data.image
            })
        })
        .catch((error) => console.log(error))
    }
    // For Image


    const UpdateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fname', profile.fname)
        formData.append('email', profile.email)
        formData.append('password', profile.password)
        formData.append('confirmPassword', profile.confirmPassword)
        formData.append('phone', profile.phone)
        formData.append('location', profile.location)
        formData.append('image', image)

        

        axios.patch(`http://localhost:1000/api/users/update-profile/${id}`, formData)
        .then(res => {
            console.log(res)
            // setImage(
            //     res.data.data.image
            // )
        })
        .catch(err => console.log(err))
        
        
        
    }
    // Image ends here
    
    if(image){
        console.log(image,'this is the image')
        var imageString = image.image;
    }else{
        imageString = Upload;
    }

    console.log(imageString, 'line 90')


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
                    onChange={(e) => setProfile({
                        fname: e.target.value
                    })}
                    value={profile.fname}
                    />

                    <label> Phone </label>
                    <input 
                    type='tel'
                    value={profile.phone}
                    onChange={(e) => setProfile({
                        phone: e.target.value
                    })}
                    />

                    <label> Email </label>
                    <input 
                    type='email'
                    value={profile.email}
                    onChange={(e) => setProfile({
                        email: e.target.value
                    })}
                    />

                    <label> Password </label>
                    <input 
                    type='password'
                    onChange={(e) => setProfile({
                        password: e.target.value
                    })}
                    value={profile.password}
                    />

                    <label> Location </label>
                    <input 
                    type='text'
                    onChange={(e) => ({
                        location: e.target.value
                    })}
                    value={profile.location}
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


export default Profile
