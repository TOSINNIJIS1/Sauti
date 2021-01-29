import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import NavAll from '../NavForAll/NavAll';
import './market.scss';
import PopUp from './PopUp';
import Signout from '../dashboard/signout'
import axiosWithAuth from '../auth/authWithAuth'
import axios from 'axios';

function Market() {

    const token = localStorage.getItem('token')
    
    const [market, setMarket] = useState({
        category: '',
        item: '',
        location: ''
    })

    const [marketList, setMarketList] = useState([])

    console.log(marketList, 'market')

    // useEffect(() => {
    //     getProducts()
    // })

    const getProducts = () => {
        axios.get('http://localhost:1000/api/products', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((res) => {
            setMarketList(res.data)
            console.log(res.data)
        })
        .catch((error) => console.error(error))
    }

    
    
    const [category, setCategory] = useState('');
    const [ item, setItem ] = useState('');
    const [location, setLocation] = useState('');


    const categoryChange = (e) => {
        setCategory(e.target.value)
    };

    const itemChange = (e) => {
        setItem(e.target.value)
    }

    const locationChange = (e) => {
        setLocation(e.target.value)
    }

    const onChange = (e) => {
        setMarket({
            ...market, [e.target.name]: e.target.value
        })
    }

    const [popup, setPopup] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();


        axios.get('http://localhost:1000/api/products', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((res) => {
            setMarketList(res.data)
            console.log(res.data)
        })
        .catch((error) => console.error(error))
    }

    return (
        <div className='marketFooter'>

            <div className='listContainer'>
                

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

                <div className='profileRight' style={{marginTop: '5%'}}>
                    
                    <h1> Market Price Check </h1> 
                    
                    <form id='market'>
                        <label > Category </label>
                        <select name='category' value={market.category}>
                            <option value=""> Select Product </option>
                            <option value="animal products"> Animal Products </option>
                            <option value="beans"> Beans </option>
                            <option value="cereals" > Cereals </option>
                            <option value="fruits" > Fruits </option>
                            <option value="vegetables"> Vegetables </option>
                            <option value="seeds & nuts"> Seeds and Nuts </option>
                            <option value="other"> Other </option>
                            <option value="peas"> Peas </option>
                            <option value="roots & tubers"> Roots and Tubers </option>
                        </select>

                        <label> Items </label>
                        <input
                        name='item'
                        onChange={onChange} 
                        value={market.item}
                        
                        />

                        <label> Location </label>
                        
                        <input
                        name='location'
                        onChange={onChange} 
                        value={market.location}

                        />

                        <PopUp popup={popup} />                        
                        <button onClick={onSubmit} id='button' disabled={!market.item || !market.location }> Check Price </button> 
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Market
