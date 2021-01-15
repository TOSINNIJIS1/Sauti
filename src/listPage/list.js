import React, { useState } from 'react';
import './styles/list.scss';
import firstImage from './images/cristian-newman-tnxRFtXI9dI-unsplash.png';
import secondImage from './images/dollar-gill-NY82qt3niy8-unsplash 1.png';
import thirdImage from './images/nana-andoh-PX3WTTgNqs8-unsplash.png'
import Edit from './edit';
import { Link } from 'react-router-dom';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'


function CardList () {
    
    const [card] = useState([
        {
            image: `${firstImage}`,
            category: 'Shirt',
            price: '2109.450',
            item: 'Blue v-neck short sleeve shirt'
        },
        {
            image: `${secondImage}`,
            category: 'Shirt',
            price: '2305.150',
            item: 'Blue striped medium long sleeve'
        },
        {
            image: `${thirdImage}`,
            category: 'Shirt',
            price: '1909.450',
            item: 'White letter short sleeve shirt'
        }
    ])


    return (
        <div className='listContainer'>
            <NavAll />
            <div className='left'>
                <h1 Link to='/'> Sauti </h1>
                <hr />

                <h3> Listings </h3> 

                <nav style={{cursor: 'pointer'}}>
                    <Link to='/'>
                        <h4> Home </h4>
                    </Link>

                    <Link to='/market'>
                        <h4> Market Price </h4>
                    </Link>

                    <Link to='/list'>
                        <h4 style={{color: 'white'}}> Listings </h4>
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


            <div className='right'>

            
            {card.map (data => (
                <div className='card'>
                    <img src={data.image} alt='cristian newman'  />
                    
                    <div className='category'>
                        <h1> {data.category} {data.price} </h1>
                        <p> {data.item} </p>
                        <button> Edit </button>
                    </div>
                </div>
                
            ))}

                
            </div>
            <Footer />

        </div>
    )
}

export default function ListProduct() {
    return (
        <div>
            {/* <CardList /> */}
            <Edit />
        </div>
    )
}