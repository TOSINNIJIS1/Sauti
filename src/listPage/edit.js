import React from 'react'
import Image from './images/cristian-newman-tnxRFtXI9dI-unsplash.png';
import {Link} from 'react-router-dom'
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './styles/list.scss'


let CATEGORIES = ['Clothes', 'Shoes', 'Shirt', 'Jewelries', 'Animal Products', 'Beans', 'Cereal', 'Fruits', 'Vegetables', 'Seeds & Nuts', 'Other', 'Peas', 'Roots & Tubers', 'Cereals']

function Edit() {
    const [location, setLocation] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [item, setItem] = React.useState('')
    const [image, setImage] = React.useState('')


    var {id} = useParams()
    // console.log(id)
    
    React.useEffect(() => {
        getProduct(id)
    },[])

    const getProduct = (id) => {
        axios.get(`http://localhost:1000/api/products/${id}`)
        .then(response => {
            setLocation(response.data.location)
            setDescription(response.data.description)
            setCategory(response.data.category)
            setItem(response.data.item)
            setPrice(response.data.price)
            setImage(response.data.image)
            // console.log(response)
        })

        .catch(error => console.log(error))
    }

    const onClick = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('location', location)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('item', item)
        formData.append('image', image)


        axios.put(`http://localhost:1000/api/products/${id}`, formData)
        .then(response => { 
            // console.log(response)
            getProduct(id) 
        })

        .catch(error => { console.log(error) })
    }

    return (
        // <div className='footCont'>
            <div className='listContainer'>
                <div className='left'>
                    <h1 Link to='/'> Sauti </h1>
                    <hr />
                    
                    <h3> Item </h3> 
                    
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
                    
                    <Link to='/add'>
                        <h4 link to='add'> Add Product </h4>
                    </Link>
                </nav>

                    <p> Sign Out </p>
                </div>
                <NavAll />


                <div className='listRight' style={{display: 'flex'}}>
                    
                    <div className='edit'>
                        <div className='editImg'>
                            <img src={image} alt='' />
                        </div>

                        <div className='form'>
                            {/* <div className='editHeader' style={{textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '36px'}}>
                                <h4> Edit </h4>
                            </div> */}

                            <form >
                                <label> Location </label>
                                <input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                // name='location'

                                />

                                <label> Category </label>
                                {/* <input 
                                value={category}
                                // name='category'


                                /> */}
                                <select required
                                name='category'
                                value={category}
                                onChange={(e) =>setCategory(e.target.value)}
                                > 
                                    <option > Select </option> 
                                    {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                                </select>

                                <label> Item </label>
                                <input 
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                                name='item'

                                />

                                <label> Description </label>
                                <input 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name='description'
                                
                                />

                                <label> Price </label>
                                <input 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                name='price'

                                />
                                
                                <label className='editPhoto'> Photo </label>
                                <input className='editPhoto' type='file' name='image' 
                                onChange={(e) => setImage(e.target.files[0])}

                                />

                                <button id='save' onClick={onClick} > Save </button>
                            </form>
                        </div> 
                    </div>
                    <Footer />

                </div>
            </div>
        // </div>
    )
}

export default Edit
