import React from 'react';
import './styles/list.scss';
import firstImage from './images/cristian-newman-tnxRFtXI9dI-unsplash.png';


function CardList () {

    return (
        <div className='listContainer'>
            <div className='left'>
                <h1> Sauti </h1>
                <hr />

                <h3> Listings </h3> 

                <nav>
                    <h4> Home </h4>
                    <h4> Market Price </h4>
                    <h4 style={{color: 'white'}}> Listings </h4>
                    <h4> Profile </h4>
                    <h4> Add Product </h4>
                </nav>

                <p> Sign Out </p>
            </div>

            <div className='right'>
                <div className='card'>
                    <div className='image'>
                        <div>
                            <img src={firstImage} alt='cristian newman' />
                        </div>

                        <div className='h1'>
                            <div className='category'>
                                <h1> Shirt </h1>
                            </div>

                            <div classame='price'>
                                <h1> 2109.450 </h1> 
                            </div>
                            
                        </div>
                            
                        <p> Blue v-neck short sleeve shirt </p>
                        
                        <button> Edit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ListProduct() {
    return (
        <div>
            <CardList />
        </div>
    )
}