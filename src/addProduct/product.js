import React, { useEffect, useState } from 'react';
import './style/product.scss';
import Upload from './image/upload.png';
import {Link} from 'react-router-dom';
import NavAll from '../NavForAll/NavAll'
import Footer from '../footer/footer'
import Signout from '../dashboard/signout';
import axios from 'axios';
import PopUp from './productPopUp';

let CATEGORIES = ['Clothes', 'Shoes', 'Shirt', 'Jewelries', 'Animal Products', 'Beans', 'Cereal', 'Fruits', 'Vegetables', 'Seeds & Nuts', 'Other', 'Peas', 'Roots & Tubers', 'Cereals']

function ProductInfo () {
    const [product, setProduct] = useState({
        location: '',
        category: '',
        item: '',
        description: '',
        price: '',
    })


    const [ productList, setProductList ] = useState([])
    console.log(productList, 'list')
    
    const [fileProduct, setFileProduct] = useState({
        image: '',
    })

    const target = (e) => {
        return ({target: { value }}) => {
            setProduct((oldProduct) => (
                ({...oldProduct, [e]: value })
            ))
        }
    }    

    // Image start here
    const handleChange = e => {
        setFileProduct({
            preview: URL.createObjectURL(e.target.files[0]),
            image: e.target.files[0]
        })    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const formData = new FormData();
        formData.append("image", fileProduct.image);
        formData.append("item", product.item);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("location", product.location);

        // for (let obj of formData) {
        //     console.log(obj, 'obj of formData')
        // }

        const config = {
            headers: {
                // 'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        };

        axios.post('http://localhost:1000/api/products/', formData, config ) 
        .then(res => { 
            setProductList(res.data); 
            openProductPopUp()
        })
        .catch(error => console.log(error, 'big bang'))
    }

    const [productPopUp, setProductPopUp] = useState(false)
    
    const openProductPopUp = () => {
        setProductPopUp(prev => !prev);
    };

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
                    <form enctype="multipart/form-data"> 
                        <label> Location </label>
                        <input required
                        type='text'
                        name='location'
                        onChange={target('location')}
                        />

                        <label> Category </label>

                        <select required
                        name='category'
                        onChange={target('category')}
                        > 
                            <option > Select </option> 
                            {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                        </select>
                        
                        <label> Item </label>
                        <input required
                        name='item'
                        onChange={target('item')}
                        />
                        <label> Description </label>
                        <input required
                        name='description'
                        onChange={target('description')}
                        />
                        <label> Price </label>
                        <input required
                        name='price'
                        onChange={target('price')}
                        />
                        
                        <label className='up'> Upload Image </label>
                        <label htmlFor='upload-button'>  
                            {fileProduct.preview 
                            ? (
                                <img 
                                src={fileProduct.preview} 
                                onClick={() => setFileProduct({preview: null, image: null})}
                                alt='preview' maxWidth='100%' maxWidth='100%' minWidth='80%' height='250px' />
                            ) : (
                                <div className='upload'>
                                <img src={Upload} alt='upload' />
                                </div>
                            )}
                        </label>
                        
                        {/* <input type="hidden" name="MAX_FILE_SIZE" value="2000000" /> */}
                        <input 
                        // required 
                        name='image'
                        type='file'
                        id='upload-button'
                        style={{display: 'none'}}        
                        onChange={handleChange}              
                        />

                        <PopUp 
                        productPopup={productPopUp} 
                        setProductPopUp={setProductPopUp}
                        productList = {productList} 
                        />      
                        
                        <button type='submit' onClick={(e) => handleSubmit(e)}> Add Product </button>
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