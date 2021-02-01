import React, { useEffect, useState } from 'react';
import './style/product.scss';
// import axios from 'axios';
import Upload from './image/upload.png';
import {Link} from 'react-router-dom';
import NavAll from '../NavForAll/NavAll'
import Footer from '../footer/footer'
import Signout from '../dashboard/signout';
import axiosWithAuth from '../auth/authWithAuth'
import axios from 'axios';

let CATEGORIES = ['Clothes', 'Shoes', 'Jewelries', 'Animal Products', 'Beans', 'Cereal', 'Fruits', 'Vegetables', 'Seeds & Nuts', 'Other', 'Peas', 'Roots & Tubers', 'Cereals']


function ProductInfo (props) {
    const [product, setProduct] = useState({
        location: '',
        category: '',
        item: '',
        description: '',
        price: '',
        image: '',
        preview: ''
    })
    console.log(product.image, 'image here')

    // const [category, setCategory] = useState('')

    // const categoryOnChange = e => {
    //     setProduct(e.target.value)
    //     console.log("This is the category", e.target)
    // } 


    const target = (e) => {
        return ({target: { value }}) => {
            setProduct((oldProduct) => (
                ({...oldProduct, [e]: value })
            ))
        }
    }    


    // Image start here


    
    const handleChange = e => {

            setProduct({
                preview: URL.createObjectURL(e.target.files[0]),
                image: e.target.files[0]
            });
        // };
    };

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token');

        console.log(token, 'this is the token')

        e.preventDefault();
        const formData = new FormData();
        formData.append("image", product.image);
        formData.append("item", product.item);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("location", product.location);
        formData.append("preview", product.preview);

        axios.post('http://localhost:1000/api/products/', formData
        , {
            headers: { 
                'Authorization': `Bearer ${token}`,
            }
        }
        ) 
        .then(res => {
            console.log(res)
            axiosWithAuth().get('/products' + res.data._id)
            
        })
        .catch(error => console.log(error, 'big bang'))
    }

    const [testImage, setTestImage] = useState([])

    useEffect(() => {
        getClick()
    },[])

    // console.log())

    const getClick = () => {
        const token = localStorage.getItem('token');
        axiosWithAuth().get('/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setTestImage(res.data)
        })
        .catch(error => console.log(error))
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
                    <form onSubmit={handleSubmit}> 
                        <label> Location </label>
                        <input required
                        type='text'
                        value={product.location}
                        onChange={target('location')}
                        />

                        <label> Category </label>
                        {/* <input required
                        type='text'
                        // value={product.category}
                        // onChange={target('category')}
                        /> */}

                        
                        
                        <select required
                        value={product.category} 
                        onChange={target('category')}
                        // name='category'
                        > 
                            <option > Select </option> 
                            {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                        </select>
                        
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
                            {product.preview 
                            ? (
                                <img src={product.preview} alt='preview' maxWidth='100%' maxWidth='100%' minWidth='80%' height='250px' />
                            ) : (
                                <div className='upload'>
                                <img src={Upload} alt='upload' />
                                </div>
                            )}
                        </label>
                        
                        <input required 
                        type='file'
                        id='upload-button'
                        style={{display: 'none'}}        
                        onChange={handleChange}              
                        />
                        
                        <button type='submit'
                        // onClick={handleSubmit}
                        > Add Product </button>
                    </form>
                </div>
                <div>
                    {
                        testImage.map(a => (
                            <div> <img src={a.image} /> </div>
                        ))
                    }
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