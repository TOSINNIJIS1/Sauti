import React, { useState } from 'react';
import './style/product.scss';
// import axios from 'axios';
import Upload from './image/upload.png';
import {Link} from 'react-router-dom';
import NavAll from '../NavForAll/NavAll'
import Footer from '../footer/footer'
import Signout from '../dashboard/signout';


let CATEGORIES = ['Clothes', 'Shoes', 'Jewelries']


function ProductInfo () {
    const [product, setProduct] = useState({
        location: '',
        category: '',
        item: '',
        Description: '',
        price: '',
        upload: null
    })

    const [category, setCategory] = useState('')

    const categoryOnChange = e => {
        setCategory(e.target.value)
        console.log("This is the category", category)
    } 

    const [image, setImage] = useState([])

    const target = (e) => {
        return ({target: { value }}) => {
            setProduct((oldProduct) => (
                ({...oldProduct, [e]: value })
            ))
        }
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    const imageOnchange = e => {
        setImage({
            upload: e.target.file[0]
        })
    }

    const imageUpload = e => {
        console.log(e)
        // const newData = new FormData();
        // newData.append('image', this.state.product.upload, this.state.product.upload.name);

        // axios.post('', newData, {
        //     onUploadProgress: ProgressEvent => {
        //         console.log('Upload Progress: ' + (ProgressEvent.loaded / ProgressEvent.total * 100) + '%' )
        //     }
        // })
        // .then(res => { console.log(res)})
        // .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='productCont'>
                <NavAll />
                <div className='left'>
                    <h1> Sauti </h1>
                    <hr />

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
                            <h4 link to='/profile'> Profile </h4>
                        </Link>
                        
                        <Link to='/product' >
                            <h4 style={{color: 'white'}}> Add Product </h4>
                        </Link>
                    </nav>

                    <Signout />

                </div>
    
                <div className='right'>
                    <form onSubmit={onSubmit}>
                        <label> Location </label>
                        <input required
                        type='text'
                        value={product.location}
                        onChange={target('location')}
                        />
                        <label> Category </label>
                        
                        <select required
                        value={category} onChange={categoryOnChange}> 
                            <option> Select </option> 
                            {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                        </select>
                        
                        <label> Item </label>
                        <input required
                        />
                        <label> Description </label>
                        <input required
                        />
                        <label> Price </label>
                        <input required
                        />
                        
                        <label className='up'> Upload Image </label>
                        <input required 
                        type='file'
                        name='image'
                        style={{display: 'none'}}
                        onChange={imageOnchange}
                        // ref={fileUpload => fileUpload = fileUpload }
                        
                        />
                        <div className='upload'>
                            <img src={Upload} alt='upload' 
                            // onClick={() => fileUpload.click()}
                            
                            />
                        </div>
    
                        <button onClick={imageUpload} > Add Product </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default function Product() {

    return (
        <div className='prodFooter'>
            <ProductInfo />
            <Footer />
        </div>
    )
    
}