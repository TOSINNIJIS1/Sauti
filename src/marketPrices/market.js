import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import NavAll from '../NavForAll/NavAll';
import './market.scss';
import PopUp from './PopUp'

function Market() {

    const [market, setMarket] = useState({
        category: '',
        item: '',
        location: ''
    })

    const [marketList, setMarketList] = useState({
        "id": 1,
        "category": "Animal Products",
        "item": "Local Eggs",
        "price": "20 KES",
        "location": "Kenya",
        "description": "Kenyan organic eggs",
        "user_id": null
        },
        {
        "id": 2,
        "category": "Beans",
        "item": "Mixed Beans",
        "price": "15 UGX",
        "location": "Uganda",
        "description": "Ugandan mixed beans",
        "user_id": null
        },
        {
        "id": 3,
        "category": "Cereals",
        "item": "Dry Maize",
        "price": "35 TZS",
        "location": "Tanzania",
        "description": "Tanzanian dry maize",
        "user_id": null
        },
        {
        "id": 4,
        "category": "Fruits",
        "item": "Lemons",
        "price": "3 RWF",
        "location": "Rwanda",
        "description": "Rwandan lemons",
        "user_id": null
        },
        {
        "id": 5,
        "category": "Vegetables",
        "item": "Onions",
        "price": "5 SSP",
        "location": "South Sudan",
        "description": "South Sudanese organic onions",
        "user_id": null
        },
        {
        "id": 6,
        "category": "Seeds & Nuts",
        "item": "Simsim",
        "price": "15 BIF",
        "location": "Burundi",
        "description": "Burundian simsim",
        "user_id": null
        },
        {
        "id": 7,
        "category": "Other",
        "item": "Coffee",
        "price": "33 KES",
        "location": "Kenya",
        "description": "Kenyan organic coffee",
        "user_id": null
        },
        {
        "id": 8,
        "category": "Peas",
        "item": "Green Peas",
        "price": "7 RWF",
        "location": "Rwanda",
        "description": "Rwandan peas",
        "user_id": null
        },
        {
        "id": 9,
        "category": "Animal Products",
        "item": "Chicken",
        "price": "21 SSP",
        "location": "South Sudan",
        "description": "South Sudanese chicken",
        "user_id": null
        },
        {
        "id": 10,
        "category": "Roots & Tubers",
        "item": "Cassava Chips",
        "price": "5 TZS",
        "location": "Tanzania",
        "description": "Tanzanian cassava chips",
        "user_id": null
        },
        {
        "id": 11,
        "category": "Beans",
        "item": "Kidney Beans",
        "price": "11 UGX",
        "location": "Uganda",
        "description": "Ugandan kidney beans",
        "user_id": null
        },
        {
        "id": 12,
        "category": "Animal Products",
        "item": "Beef",
        "price": "17 BIF",
        "location": "Burundi",
        "description": "Burundian beef",
        "user_id": null
        },
        {
        "id": 13,
        "category": "Fruits",
        "item": "Bananas",
        "price": "17 RWF",
        "location": "Rwanda",
        "description": "Rwandan bananas",
        "user_id": null
        },
        {
        "id": 14,
        "category": "Other",
        "item": "Tea",
        "price": "30 KES",
        "location": "Kenya",
        "description": "Kenyan organic tea",
        "user_id": null
        })

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
        setPopup(!popup)
    }

    return (
        <div className='marketFooter'>

            <div className='listContainer'>
                <div className='left'>
                    <h1 Link to='/'> Sauti </h1>
                    <hr />

                    <h3> Market Price Check </h3> 

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
                        
                        <Link to='/product'>
                            <h4 link to='product'> Add Product </h4>
                        </Link>
                    </nav>

                    <p> Sign Out </p>
                </div>

                <NavAll />

                <div className='profileRight' style={{marginTop: '5%'}}>
                    
                    <h1> Market Price Check </h1> 
                    
                    <form id='market'>
                        <label > Category </label>
                        <select value={market.category}>
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
