import React from 'react';
import Market from './assets/market.png'

function Left() {
    return (
        <div className='left'>
                <h1> Sauti </h1> 
                <hr />
                <p> Grow your business </p>

                <div className='description'>
                    <span> The Sauti Trade and Market Information <br/> platform provides official, simplified, and <br /> real-time trade procedures, market prices, and <br /> exchange rates. </span>
                </div>

                <div className='image'> 
                    <img src={Market} alt='desc' />
                </div>
            </div>
    )
}

export default Left
