import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './market.scss'

function Market() {

    const [market, setMarket] = useState({
        category: '',
        item: '',
        location: ''
    })

    const onChange = (e) => {
        setMarket({
            ...market, [e.target.name]: e.target.value
        })
    }

    return (
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

            <div className='profileRight' style={{marginTop: '5%'}}>
                <form id='market'>
                    <label > Category </label>
                    <input
                    name='category'
                    onChange={onChange} 
                    value={market.category}
                    />

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

                    
                    <button disabled={!market.category || !market.item || !market.location }> Check Price </button> 
                </form>
            </div>

        </div>
    )
}

export default Market
