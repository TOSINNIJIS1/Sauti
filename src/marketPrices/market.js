import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import NavAll from '../NavForAll/NavAll';
import './styles/market.scss';
import PopUp from './PopUp';
import Signout from '../dashboard/signout'
import axiosWithAuth from '../auth/authWithAuth'


function Market() {    
    const [marketCategory, setMarketCategory] = useState('')

    const MarketCategoryOnChange = (e) => {
        setMarketCategory(e.target.value)
        console.log('this is market category', marketCategory)
    }

    const [marketList, setMarketList] = useState([])
    console.log(marketList, 'this is market')

    const MarketListOnSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')


        axiosWithAuth().get('/products', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((res) => {
            const result = res.data
            console.log(res)

            let filterMarketList = result.filter(products => {
                let marketItemData = products.item.toString().toLowerCase();
                let marketCategoryData = products.category.toString().toLowerCase();
                let marketLocationData = products.location.toString().toLowerCase();  
                    
                return marketItemData.includes(searchMarketItem.toLowerCase()) && marketCategoryData.includes(marketCategory.toLowerCase()) && marketLocationData.includes(searchMarketLocation.toLowerCase())
            })
            setMarketList(filterMarketList)
            openPopUp()
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

                        <PopUp 
                        popup={popUp} 
                        setPopUp={setPopUp}
                        marketList = {marketList} 
                        />                        
                        
                        <button 
                        onClick={MarketListOnSubmit} 
                        id='button' 
                        disabled={!searchMarketItem || !searchMarketLocation || !marketCategory }
                        
                        > Check Price </button> 
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Market
