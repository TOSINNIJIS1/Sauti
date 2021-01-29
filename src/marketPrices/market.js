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
    const [market, setMarket] = useState({
        category: '',
        item: '',
        location: ''
    })

    const MarketOnChange = (e) => {
        setMarket({
            ...market, [e.target.name]: e.target.value
        })
    }


    const [marketCategory, setMarketCategory] = useState('')

    const MarketCategoryOnChange = (e) => {
        setMarketCategory(e.target.value)
        console.log('this is market category', marketCategory)
    }

    const [marketList, setMarketList] = useState([])
    console.log(marketList)

    const MarketListOnSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')


        axios.get('http://localhost:1000/api/products', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((res) => {
            const result = res.data

            let filterMarketList = result.filter(products => {
                let marketItemData = products.item.toString().toLowerCase();
                let marketCategoryData = products.category.toString().toLowerCase();
                let marketLocationData = products.location.toString().toLowerCase();  
                // console.log(marketItemData)              

                return marketItemData.includes(searchMarketItem.toLowerCase()) && marketCategoryData.includes(marketCategory.toLowerCase()) && marketLocationData.includes(searchMarketLocation.toLowerCase())
            })
            setMarketList(filterMarketList)
        })
        .catch((error) => console.error(error))
    }

    const [ searchMarketItem, setSearchMarketItem ] = useState('');
    const MarketItemOnChange = (e) => {
        setSearchMarketItem(e.target.value)
        console.log('this is market category', searchMarketItem)
    }

    const [ searchMarketLocation, setSearchMarketLocation] = useState('');
    const MarketLocationOnChange = (e) => {
        setSearchMarketLocation(e.target.value)
        console.log('this is market category', searchMarketLocation)
    }

    const [popup, setPopup] = useState(false)

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
                        <select name='category' value={marketCategory} onChange={MarketCategoryOnChange}>
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
                        onChange={MarketItemOnChange} 
                        value={searchMarketItem}
                        
                        />

                        <label> Location </label>
                        
                        <input
                        name='location'
                        onChange={MarketLocationOnChange} 
                        value={searchMarketLocation}

                        />

                        <PopUp popup={popup} />                        
                        <button onClick={MarketListOnSubmit} id='button' disabled={!searchMarketItem || !searchMarketLocation || !marketCategory }> Check Price </button> 
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Market
