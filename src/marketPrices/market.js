import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import NavAll from '../NavForAll/NavAll';
import './styles/market.scss';
import PopUp from './PopUp';
import Signout from '../dashboard/signout'
import axiosWithAuth from '../auth/authWithAuth'
import Mahiya from '../mahiya'
import axios from 'axios';



function Market() {    
    const [marketCategory, setMarketCategory] = useState('')
    const [notFound, setNotFound] = useState('')
    console.log(notFound, 'notfound')

    const MarketCategoryOnChange = (e) => {
        setMarketCategory(e.target.value)
    }

    const [marketList, setMarketList] = useState([])
    console.log(marketList, 'my marketList')

    const MarketListOnSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')


        axiosWithAuth().get('/products', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((res) => {
            console.log(res.data)
            const result = res.data

            let filterMarketList = result.filter(products => {
                let marketItemData = products.item.toString().toLowerCase();
                let marketCategoryData = products.category.toString().toLowerCase();
                let marketLocationData = products.location.toString().toLowerCase();  
                    
                return marketItemData.includes(searchMarketItem.toLowerCase()) && marketCategoryData.includes(marketCategory.toLowerCase()) && marketLocationData.includes(searchMarketLocation.toLowerCase())
            })

            console.log(filterMarketList, 'filter')

            if (filterMarketList) {
                console.log(filterMarketList, 'filter')
                setMarketList(filterMarketList)
                openPopUp()
            } else {
                console.log(res)
                setNotFound(res.data.message)
                openPopUp()
                
                // <div> lol </div>  
            }
        })
        .catch((error) => console.error(error))
    }

    const [ searchMarketItem, setSearchMarketItem ] = useState('');
    const MarketItemOnChange = (e) => {
        setSearchMarketItem(e.target.value)
    }

    const [ searchMarketLocation, setSearchMarketLocation] = useState('');
    const MarketLocationOnChange = (e) => {
        setSearchMarketLocation(e.target.value)
    }

    const [popUp, setPopUp] = useState(false)
    
    const openPopUp = () => {
        setPopUp(prev => !prev);
    };


    return (
        <div className='marketFooter'>
            <div className='listContainer'>
                
            <div className='left'>
                        <h1> Sauti </h1>
                        <hr />

                        <h3> Market Price </h3> 

                        <nav style={{cursor: 'pointer'}}>
                            <Link to='/'>
                                <h4> Home </h4>
                            </Link>

                            <Link to='/market'>
                                <h4 style={{color: 'white'}}> Market Price </h4>
                            </Link>

                            <Link to='/list'>
                                <h4> Listings </h4>
                            </Link>

                            <Link to='/profile'>
                                <h4 link to='/profile'> Profile </h4>
                            </Link>
                            
                            <Link to='/product' >
                                <h4> Add Product </h4>
                            </Link>
                        </nav>

                        <Signout />

                    </div>
                    <NavAll />

                <div className='marketRight' style={{marginTop: '10%'}}>
                    <div id='popup'>
                        <PopUp 
                            popup={popUp} 
                            setPopUp={setPopUp}
                            marketList = {marketList} 
                        />    
                    </div>
                  
                    <h1> Market Price Check </h1> 
                    

                    { marketList
                    ?
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

                                           
                        
                        <button 
                        onClick={MarketListOnSubmit} 
                        id='button' 
                        disabled={!searchMarketItem || !searchMarketLocation || !marketCategory }
                        
                        > Check Price </button> 
                    </form>
                    : null }
                    
                    
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Market
