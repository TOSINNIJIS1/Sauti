import React, { useState } from 'react';
import './style/product.scss';
// import axios from 'axios';
import Upload from './image/upload.png';
import {Link} from 'react-router-dom';
import NavAll from '../NavForAll/NavAll'
import Footer from '../footer/footer'
import Signout from '../dashboard/signout';
import axiosWithAuth from '../auth/authWithAuth'
import axios from 'axios';

let CATEGORIES = ['Clothes', 'Shoes', 'Jewelries', 'Cereal']


function ProductInfo (props) {
    const [product, setProduct] = useState({
        location: '',
        category: '',
        item: '',
        description: '',
        price: ''
    })

    const PostRequest = (e) => {
        
    }

    const [category, setCategory] = useState('')

    const categoryOnChange = e => {
        setCategory(e.target.value)
        console.log("This is the category", category)
    } 

    const target = (e) => {
        return ({target: { value }}) => {
            setProduct((oldProduct) => (
                ({...oldProduct, [e]: value })
            ))
        }
    }    


    // Image start here

    const [imageState, setImageStage] = useState({
        image: '', 
        preview: ''
    })
    
    const handleChange = e => {
        console.log(e)
        if (e.target.files.length) {
            setImageStage({
                preview: URL.createObjectURL(e.target.files[0]),
                image: e.target.files[0]
            });
        }
    };

    // const addProduct = 
    const token = localStorage.getItem('token')

    const addProduct = async (e) => {

        axiosWithAuth().post('/products', product, {
            headers: { 
                "Authorization": `Bearer ${token}`,
            }
        }) 
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
        .catch(error => console.log(error, 'meh'))
    }

    const getProduct = ()  => axios.get('https://sauti-market-app.herokuapp.com/api/products')
    const handleSubmit = () => {
        axios.all([getProduct()])
        .then(
            axios.spread((...response) => {
                let res = response[0]
                console.log(res)
            })
        )
        .catch(error => console.log('blehhh', error))

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
                    <form>
                        <label> Location </label>
                        <input required
                        type='text'
                        value={product.location}
                        onChange={target('location')}
                        />
                        <label> Category </label>
                        <input required
                        value={product.category}
                        onChange={target('category')}
                        />
                        
                        {/* <select required
                        value={category} 
                        value={product.category}

                        onChange={categoryOnChange}> 
                            <option value={product.category} onChange={target('category')}> Select </option> 
                            {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                        </select> */}
                        
                        <label> Item </label>
                        <input required
                        value={product.item}
                        onChange={target('item')}
                        />
                        <label> Description </label>
                        <input required
                        value={product.description}
                        onChange={target('description')}
                        />
                        <label> Price </label>
                        <input required
                        value={product.price}
                        onChange={target('price')}
                        />
                        
                        <label className='up'> Upload Image </label>
                        <label htmlFor='upload-button'>  
                            {imageState.preview 
                            ? (
                                <img src={imageState.preview} alt='preview' maxWidth='100%' maxWidth='100%' minWidth='80%' height='250px' />
                            ) : (
                                <div className='upload'>
                                <img src={Upload} alt='upload' />
                                </div>
                            )}
                        </label>
                        
                        <input required 
                        type='file'
                        name='image'
                        class='filepond'
                        id='upload-button'
                        style={{display: 'none'}}        
                        onClick={handleChange}              
                        />
                        
                        <button 
                        onClick={handleSubmit}
                        > Add Product </button>
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